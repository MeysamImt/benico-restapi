import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function listWebhooks(userId: string) {
  // Find all webhooks for tenants the user is a member of
  const memberships = await prisma.tenantMember.findMany({ where: { userId } });
  const tenantIds = memberships.map(m => m.tenantId);
  return prisma.webhook.findMany({ where: { tenantId: { in: tenantIds } }, orderBy: { createdAt: 'desc' } });
}

export async function createWebhook(userId: string, data: any) {
  // Find a tenant the user is a member of
  const membership = await prisma.tenantMember.findFirst({ where: { userId, tenantId: data.tenantId } });
  if (!membership) throw new Error('Forbidden');
  return prisma.webhook.create({ data });
}

export async function updateWebhook(userId: string, webhookId: string, data: any) {
  const webhook = await prisma.webhook.findUnique({ where: { id: webhookId } });
  if (!webhook) throw new Error('Not found');
  const membership = await prisma.tenantMember.findFirst({ where: { userId, tenantId: webhook.tenantId } });
  if (!membership) throw new Error('Forbidden');
  return prisma.webhook.update({ where: { id: webhookId }, data });
}

export async function deleteWebhook(userId: string, webhookId: string) {
  const webhook = await prisma.webhook.findUnique({ where: { id: webhookId } });
  if (!webhook) throw new Error('Not found');
  const membership = await prisma.tenantMember.findFirst({ where: { userId, tenantId: webhook.tenantId } });
  if (!membership) throw new Error('Forbidden');
  return prisma.webhook.delete({ where: { id: webhookId } });
}

export async function listWebhookDeliveries(userId: string, webhookId: string) {
  const webhook = await prisma.webhook.findUnique({ where: { id: webhookId } });
  if (!webhook) throw new Error('Not found');
  const membership = await prisma.tenantMember.findFirst({ where: { userId, tenantId: webhook.tenantId } });
  if (!membership) throw new Error('Forbidden');
  return prisma.webhookDelivery.findMany({ where: { webhookId }, orderBy: { deliveredAt: 'desc' } });
} 