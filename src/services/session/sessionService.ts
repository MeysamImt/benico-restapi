import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function listUserSessions(userId: string) {
  return prisma.session.findMany({
    where: { userId },
    select: {
      id: true,
      createdAt: true,
      lastActive: true,
      ip: true,
      userAgent: true,
    },
    orderBy: { lastActive: 'desc' },
  });
}

export async function revokeUserSession(userId: string, sessionId: string) {
  return prisma.session.deleteMany({ where: { id: sessionId, userId } });
}
