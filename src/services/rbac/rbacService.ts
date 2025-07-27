import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function listRoles(tenantId?: string) {
  return prisma.role.findMany({
    where: tenantId ? { isGlobal: false } : { isGlobal: true },
    orderBy: { createdAt: 'desc' },
  });
}

export async function createRole(data: { name: string; description?: string; isGlobal?: boolean }) {
  return prisma.role.create({ data });
}

export async function updateRole(roleId: string, data: any) {
  return prisma.role.update({ where: { id: roleId }, data });
}

export async function deleteRole(roleId: string) {
  return prisma.role.delete({ where: { id: roleId } });
}

export async function listRolePermissions(roleId: string) {
  const role = await prisma.role.findUnique({
    where: { id: roleId },
    include: { permissions: true },
  });
  return role?.permissions || [];
}

export async function assignPermission(roleId: string, permissionId: string) {
  return prisma.role.update({
    where: { id: roleId },
    data: { permissions: { connect: { id: permissionId } } },
    include: { permissions: true },
  });
}

export async function removePermission(roleId: string, permissionId: string) {
  return prisma.role.update({
    where: { id: roleId },
    data: { permissions: { disconnect: { id: permissionId } } },
    include: { permissions: true },
  });
}
