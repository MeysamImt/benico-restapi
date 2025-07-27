import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createTenant(
  ownerId: string,
  data: {
    name: string;
    slug: string;
    logoUrl?: string;
    description?: string;
    contactEmail?: string;
    contactPhone?: string;
  },
) {
  return prisma.tenant.create({
    data: {
      ...data,
      ownerId,
      members: {
        create: {
          userId: ownerId,
          role: { connect: { name: 'Admin' } },
        },
      },
    },
  });
}

export async function listTenants(userId: string) {
  return prisma.tenant.findMany({
    where: {
      members: { some: { userId } },
    },
  });
}

export async function getTenant(tenantId: string, userId: string) {
  return prisma.tenant.findFirst({
    where: {
      id: tenantId,
      members: { some: { userId } },
    },
  });
}

export async function updateTenant(tenantId: string, userId: string, data: any) {
  // Only owner or admin can update
  const tenant = await prisma.tenant.findFirst({
    where: { id: tenantId, ownerId: userId },
  });
  if (!tenant) throw new Error('Forbidden');
  return prisma.tenant.update({ where: { id: tenantId }, data });
}

export async function deleteTenant(tenantId: string, userId: string) {
  // Only owner can delete
  const tenant = await prisma.tenant.findFirst({
    where: { id: tenantId, ownerId: userId },
  });
  if (!tenant) throw new Error('Forbidden');
  return prisma.tenant.delete({ where: { id: tenantId } });
}

export async function listMembers(tenantId: string) {
  return prisma.tenantMember.findMany({
    where: { tenantId },
    include: { user: true, role: true },
  });
}

export async function inviteMember(tenantId: string, userId: string, roleId: string) {
  return prisma.tenantMember.create({
    data: { tenantId, userId, roleId },
    include: { user: true, role: true },
  });
}

export async function updateMemberRole(tenantId: string, memberId: string, roleId: string) {
  return prisma.tenantMember.update({
    where: { id: memberId, tenantId },
    data: { roleId },
    include: { user: true, role: true },
  });
}

export async function removeMember(tenantId: string, memberId: string) {
  return prisma.tenantMember.delete({
    where: { id: memberId, tenantId },
  });
}
