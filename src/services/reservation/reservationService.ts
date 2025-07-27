import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createReservation(
  userId: string,
  data: { productId: string; quantity: number; startDate?: Date; endDate?: Date; notes?: string },
) {
  return prisma.reservation.create({
    data: {
      ...data,
      userId,
      status: 'PENDING',
      paymentStatus: 'UNPAID',
    },
  });
}

export async function listReservations(userId: string) {
  return prisma.reservation.findMany({
    where: { userId },
    include: { product: true },
    orderBy: { createdAt: 'desc' },
  });
}

export async function getReservation(reservationId: string, userId: string) {
  return prisma.reservation.findFirst({
    where: { id: reservationId, userId },
    include: { product: true },
  });
}

export async function updateReservation(reservationId: string, userId: string, data: any) {
  // Only owner can update
  const reservation = await prisma.reservation.findFirst({ where: { id: reservationId, userId } });
  if (!reservation) throw new Error('Forbidden');
  return prisma.reservation.update({ where: { id: reservationId }, data });
}

export async function deleteReservation(reservationId: string, userId: string) {
  // Only owner can delete/cancel
  const reservation = await prisma.reservation.findFirst({ where: { id: reservationId, userId } });
  if (!reservation) throw new Error('Forbidden');
  return prisma.reservation.delete({ where: { id: reservationId } });
}
