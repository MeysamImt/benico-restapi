import { PrismaClient } from '@prisma/client';
import speakeasy from 'speakeasy';
import qrcode from 'qrcode';
import nodemailer from 'nodemailer';
import { MelipayamakApi } from '@mfrtn/melipayamak-api';

const prisma = new PrismaClient();

export async function generate2FASecret(email: string) {
  const secret = speakeasy.generateSecret({ name: `BeniMono (${email})` });
  const otpauth_url = secret.otpauth_url!;
  const qr = await qrcode.toDataURL(otpauth_url);
  return { secret: secret.base32, otpauth_url, qr };
}

export function verify2FAToken(secret: string, token: string) {
  return speakeasy.totp.verify({
    secret,
    encoding: 'base32',
    token,
    window: 1,
  });
}

export async function enable2FA(userId: string, secret: string) {
  return prisma.twoFactorAuth.upsert({
    where: { userId },
    update: { secret, enabled: true },
    create: { userId, secret, enabled: true, method: 'authenticator' },
  });
}

export async function disable2FA(userId: string) {
  return prisma.twoFactorAuth.update({
    where: { userId },
    data: { enabled: false, secret: null },
  });
}

export async function send2FACodeEmail(email: string, code: string) {
  // تنظیمات SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || 'no-reply@benimono.com',
    to: email,
    subject: 'Your 2FA Code',
    text: `Your 2FA code is: ${code}`,
  });
}

export async function send2FACodeSMS(phone: string, code: string) {
  const username = process.env.MELIPAYAMAK_USER;
  const password = process.env.MELIPAYAMAK_PASS;
  const from = process.env.MELIPAYAMAK_FROM;

  if (!username || !password || !from) {
    throw new Error('MeliPayamak credentials missing');
  }

  // ساخت نمونه API
  const api = new MelipayamakApi({
    username,
    password,
  });

  // ارسال پیامک
  const result = await api.send({
    from,
    to: phone,
    text: `Your 2FA code is: ${code}`,
  });

  // می‌تونی نتیجه رو لاگ یا هندل کنی
  console.log('2FA SMS sent result:', result);
}
