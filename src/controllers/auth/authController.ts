import { Request, Response } from 'express';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail } from '../../services/auth/userService';
import { config } from '../../config';
import {
  generateOTP,
  saveOTP,
  verifyOTP,
  sendOTPEmail,
  sendOTPSMS,
} from '../../services/auth/otpService';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const appName = 'BeniMono';

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  fullName: z.string().optional(),
  phone: z.string().optional(),
});

export const register = async (req: Request, res: Response) => {
  try {
    const parsed = registerSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ errors: parsed.error.flatten().fieldErrors });
    }
    const { email, password, fullName, phone } = parsed.data;
    const existing = await findUserByEmail(email);
    if (existing) {
      return res.status(409).json({ message: 'User already exists' });
    }
    const user = await createUser(email, password, fullName);
    // Send OTP for verification (email or SMS)
    const code = generateOTP();
    await saveOTP(user.id, code, phone ? 'sms' : 'email');
    if (phone) {
      await sendOTPSMS(phone, code);
    } else {
      await sendOTPEmail(email, fullName || email, code, appName, 'verify-email.ejs');
    }
    res
      .status(201)
      .json({
        message: 'Verification code sent',
        user: { id: user.id, email: user.email, fullName: user.fullName },
      });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const login = async (req: Request, res: Response) => {
  try {
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ errors: parsed.error.flatten().fieldErrors });
    }
    const { email, password } = parsed.data;
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const valid = await require('bcryptjs').compare(password, user.passwordHash);
    if (!valid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user.id, email: user.email }, config.jwtSecret, {
      expiresIn: '1h',
    });
    res
      .status(200)
      .json({ token, user: { id: user.id, email: user.email, fullName: user.fullName } });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const logout = async (req: Request, res: Response) => {
  // Stateless JWT: client should delete token. Optionally, implement token blacklist for advanced use.
  res.status(200).json({ message: 'Logged out (client should delete token)' });
};

export const getMe = (req: Request, res: Response) => {
  if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
  res.json({ user: req.user });
};

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(404).json({ message: 'User not found' });
  const code = generateOTP();
  await saveOTP(user.id, code, 'password');
  await sendOTPEmail(user.email, user.fullName || user.email, code, appName, 'reset-password.ejs');
  res.json({ message: 'Password reset code sent to email' });
};

export const requestEmailVerification = async (req: Request, res: Response) => {
  const { email } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(404).json({ message: 'User not found' });
  const code = generateOTP();
  await saveOTP(user.id, code, 'email');
  await sendOTPEmail(user.email, user.fullName || user.email, code, appName, 'verify-email.ejs');
  res.json({ message: 'Verification code sent to email' });
};

export const verifyEmail = async (req: Request, res: Response) => {
  const { email, code } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(404).json({ message: 'User not found' });
  const valid = await verifyOTP(user.id, code);
  if (!valid) return res.status(400).json({ message: 'Invalid or expired code' });
  await prisma.user.update({ where: { id: user.id }, data: { isEmailVerified: true } });
  res.json({ message: 'Email verified' });
};

export const requestMobileVerification = async (req: Request, res: Response) => {
  const { phone } = req.body;
  const user = await prisma.user.findUnique({ where: { phone } });
  if (!user) return res.status(404).json({ message: 'User not found' });
  const code = generateOTP();
  await saveOTP(user.id, code, 'sms');
  await sendOTPSMS(user.phone!, code);
  res.json({ message: 'Verification code sent via SMS' });
};

export const verifyMobile = async (req: Request, res: Response) => {
  const { phone, code } = req.body;
  const user = await prisma.user.findUnique({ where: { phone } });
  if (!user) return res.status(404).json({ message: 'User not found' });
  const valid = await verifyOTP(user.id, code);
  if (!valid) return res.status(400).json({ message: 'Invalid or expired code' });
  await prisma.user.update({ where: { id: user.id }, data: { isPhoneVerified: true } });
  res.json({ message: 'Mobile verified' });
};

export const verifyRegistration = async (req: Request, res: Response) => {
  const { email, phone, code } = req.body;
  let user;
  if (email) user = await prisma.user.findUnique({ where: { email } });
  if (phone) user = await prisma.user.findUnique({ where: { phone } });
  if (!user) return res.status(404).json({ message: 'User not found' });
  const valid = await verifyOTP(user.id, code);
  if (!valid) return res.status(400).json({ message: 'Invalid or expired code' });
  await prisma.user.update({
    where: { id: user.id },
    data: { isEmailVerified: !!email, isPhoneVerified: !!phone },
  });
  res.json({ message: 'Registration complete' });
};
