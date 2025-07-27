import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();

export async function createApiKey(
  tenantId: string,
  createdById: string,
  data: { name: string; description?: string; scopes?: string[]; expiresAt?: Date },
) {
  const key = crypto.randomBytes(32).toString('hex');
  return prisma.apiKey.create({
    data: {
      ...data,
      key,
      tenantId,
      createdById,
      isActive: true,
    },
  });
}

export async function listApiKeys(tenantId: string) {
  return prisma.apiKey.findMany({ where: { tenantId } });
}

export async function updateApiKey(tenantId: string, apiKeyId: string, data: any) {
  return prisma.apiKey.update({ where: { id: apiKeyId, tenantId }, data });
}

export async function revokeApiKey(tenantId: string, apiKeyId: string) {
  return prisma.apiKey.update({
    where: { id: apiKeyId, tenantId },
    data: { isActive: false, revoked: true },
  });
}
