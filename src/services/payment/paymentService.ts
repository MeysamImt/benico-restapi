import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function initiatePayment(
  userId: string,
  data: {
    amount: number;
    purpose: string;
    targetId?: string;
    description?: string;
    provider?: string;
  },
) {
  return prisma.payment.create({
    data: {
      ...data,
      userId,
      status: 'PENDING',
      isVerified: false,
    },
  });
}

export async function getPayment(paymentId: string, userId: string) {
  return prisma.payment.findFirst({ where: { id: paymentId, userId } });
}

export async function confirmPayment(paymentId: string, userId: string) {
  const payment = await prisma.payment.findFirst({ where: { id: paymentId, userId } });
  if (!payment) throw new Error('Forbidden');
  return prisma.payment.update({
    where: { id: paymentId },
    data: { status: 'SUCCESS', isVerified: true, verifiedAt: new Date() },
  });
}

export async function refundPayment(paymentId: string, userId: string) {
  const payment = await prisma.payment.findFirst({ where: { id: paymentId, userId } });
  if (!payment) throw new Error('Forbidden');
  return prisma.payment.update({ where: { id: paymentId }, data: { status: 'REFUNDED' } });
}
