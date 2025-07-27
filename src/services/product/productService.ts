import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createProduct(userId: string, data: any) {
  return prisma.product.create({
    data: {
      ...data,
      createdById: userId,
    },
  });
}

export async function listProducts() {
  return prisma.product.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function getProduct(productId: string) {
  return prisma.product.findUnique({ where: { id: productId } });
}

export async function updateProduct(productId: string, userId: string, data: any) {
  // Only creator can update
  const product = await prisma.product.findFirst({ where: { id: productId, createdById: userId } });
  if (!product) throw new Error('Forbidden');
  return prisma.product.update({ where: { id: productId }, data });
}

export async function deleteProduct(productId: string, userId: string) {
  // Only creator can delete
  const product = await prisma.product.findFirst({ where: { id: productId, createdById: userId } });
  if (!product) throw new Error('Forbidden');
  return prisma.product.delete({ where: { id: productId } });
}

export async function searchProducts(filters: any) {
  return prisma.product.findMany({
    where: filters,
    orderBy: { createdAt: 'desc' },
  });
}
