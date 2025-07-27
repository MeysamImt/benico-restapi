import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function listSubscriptions(tenantId: string) {
  return prisma.subscription.findMany({
    where: { tenantId },
    include: { plan: true },
    orderBy: { createdAt: 'desc' },
  });
}

export async function createSubscription(tenantId: string, planId: string, paymentMethod?: string) {
  const plan = await prisma.subscriptionPlan.findUnique({ where: { id: planId } });
  if (!plan) throw new Error('Plan not found');
  const now = new Date();
  const expiresAt = new Date(now.getTime() + plan.durationDays * 24 * 60 * 60 * 1000);
  const subscription = await prisma.subscription.create({
    data: {
      tenantId,
      planId,
      startedAt: now,
      expiresAt,
      status: 'ACTIVE',
      paymentMethod,
    },
  });
  await prisma.invoice.create({
    data: {
      tenantId,
      amount: plan.price,
      dueDate: expiresAt,
      status: 'unpaid',
      description: `Subscription to ${plan.name}`,
      referenceId: subscription.id,
      gateway: paymentMethod,
    },
  });
  return subscription;
}

export async function listInvoices(tenantId: string) {
  return prisma.invoice.findMany({
    where: { tenantId },
    orderBy: { createdAt: 'desc' },
  });
}

export async function getUsage(tenantId: string) {
  return prisma.usageRecord.findMany({
    where: { tenantId },
    orderBy: { timestamp: 'desc' },
  });
}
