import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getLoginLogs(userId: string) {
  return prisma.loginLog.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });
}

export async function getAuditLogs(tenantId?: string) {
  return prisma.auditLog.findMany({
    where: tenantId ? { tenantId } : {},
    orderBy: { createdAt: 'desc' },
  });
}

export async function getApiUsageLogs(tenantId?: string) {
  return prisma.apiUsageLog.findMany({
    where: tenantId ? { tenantId } : {},
    orderBy: { timestamp: 'desc' },
  });
}
