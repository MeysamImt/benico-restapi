import { PrismaClient } from '@prisma/client';
import { sendEmail } from '../../emails';
import { send2FACodeSMS } from '../2fa/2faService';

const prisma = new PrismaClient();

export function generateOTP(length = 6) {
  return Math.floor(10 ** (length - 1) + Math.random() * 9 * 10 ** (length - 1)).toString();
}

export async function saveOTP(
  userId: string,
  code: string,
  type: 'email' | 'sms' | 'password',
  expiresInMinutes = 10,
) {
  const expiresAt = new Date(Date.now() + expiresInMinutes * 60 * 1000);
  return prisma.emailVerificationToken.create({
    data: {
      userId,
      token: code,
      expiresAt,
    },
  });
}

export async function verifyOTP(userId: string, code: string) {
  const record = await prisma.emailVerificationToken.findFirst({
    where: { userId, token: code, expiresAt: { gt: new Date() } },
  });
  if (!record) return false;
  await prisma.emailVerificationToken.delete({ where: { id: record.id } });
  return true;
}

export async function sendOTPEmail(
  email: string,
  userName: string,
  code: string,
  appName: string,
  template: string,
) {
  await sendEmail(email, 'Your verification code', template, { userName, code, appName });
}

export async function sendOTPSMS(phone: string, code: string) {
  await send2FACodeSMS(phone, code);
}
