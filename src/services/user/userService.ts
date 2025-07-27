import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export async function getUserProfile(userId: string) {
  return prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      fullName: true,
      phone: true,
      avatarUrl: true,
      gender: true,
      birthdate: true,
      bio: true,
      location: true,
      social: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

export async function updateUserProfile(userId: string, data: Partial<User>) {
  return prisma.user.update({
    where: { id: userId },
    data,
    select: {
      id: true,
      email: true,
      fullName: true,
      phone: true,
      avatarUrl: true,
      gender: true,
      birthdate: true,
      bio: true,
      location: true,
      social: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

export async function deleteUserProfile(userId: string) {
  return prisma.user.delete({ where: { id: userId } });
}
