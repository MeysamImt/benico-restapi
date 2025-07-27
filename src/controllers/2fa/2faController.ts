import { Request, Response } from 'express';
import {
  generate2FASecret,
  verify2FAToken,
  enable2FA as enable2FAService,
  disable2FA as disable2FAService,
  send2FACodeEmail,
  send2FACodeSMS,
} from '../../services/2fa/2faService';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function generateRandomCode(length = 6) {
  return Math.floor(10 ** (length - 1) + Math.random() * 9 * 10 ** (length - 1)).toString();
}

export const enable2FA = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const { method } = req.body;
    if (method === 'email') {
      const code = generateRandomCode();
      await prisma.twoFactorAuth.upsert({
        where: { userId: (req.user as any).id },
        update: { secret: code, enabled: false, method: 'email' },
        create: { userId: (req.user as any).id, secret: code, enabled: false, method: 'email' },
      });
      await send2FACodeEmail((req.user as any).email, code);
      return res.json({ message: '2FA code sent to email' });
    } else if (method === 'sms') {
      const code = generateRandomCode();
      const user = await prisma.user.findUnique({ where: { id: (req.user as any).id } });
      if (!user?.phone) return res.status(400).json({ message: 'User has no phone number' });
      await prisma.twoFactorAuth.upsert({
        where: { userId: (req.user as any).id },
        update: { secret: code, enabled: false, method: 'sms', phone: user.phone },
        create: {
          userId: (req.user as any).id,
          secret: code,
          enabled: false,
          method: 'sms',
          phone: user.phone,
        },
      });
      await send2FACodeSMS(user.phone, code);
      return res.json({ message: '2FA code sent via SMS' });
    } else {
      // Default: TOTP
      const { secret, otpauth_url, qr } = await generate2FASecret((req.user as any).email);
      return res.json({ secret, otpauth_url, qr });
    }
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const verify2FA = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const { secret, token, method } = req.body;
    const twofa = await prisma.twoFactorAuth.findUnique({ where: { userId: (req.user as any).id } });
    if (!twofa) return res.status(400).json({ message: '2FA not initialized' });
    if (method === 'email' || method === 'sms') {
      if (token === twofa.secret) {
        await prisma.twoFactorAuth.update({
          where: { userId: (req.user as any).id },
          data: { enabled: true },
        });
        return res.json({ message: '2FA enabled' });
      } else {
        return res.status(400).json({ message: 'Invalid 2FA code' });
      }
    } else {
      // TOTP
      if (!secret || !token) return res.status(400).json({ message: 'Missing secret or token' });
      const valid = verify2FAToken(secret, token);
      if (!valid) return res.status(400).json({ message: 'Invalid 2FA token' });
      await enable2FAService((req.user as any).id, secret);
      return res.json({ message: '2FA enabled' });
    }
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const disable2FA = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    await disable2FAService((req.user as any).id);
    res.json({ message: '2FA disabled' });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
};
