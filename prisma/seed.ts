import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create a user
  const user = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      passwordHash: '$2a$10$seededpasswordhash', // Use a real bcrypt hash in production
      fullName: 'Admin User',
      isEmailVerified: true,
    },
  });

  // Create a tenant
  const tenant = await prisma.tenant.upsert({
    where: { slug: 'default-tenant' },
    update: {},
    create: {
      name: 'Default Tenant',
      slug: 'default-tenant',
      ownerId: user.id,
    },
  });

  // Create a product
  await prisma.product.upsert({
    where: { id: 'seed-product-1' },
    update: {},
    create: {
      id: 'seed-product-1',
      name: 'Sample Product',
      category: 'hotel',
      type: 'HOTEL',
      province: 'Tehran',
      city: 'Tehran',
      price: 1000000,
      finalPrice: 1000000,
      availableQty: 10,
      createdById: user.id,
      isActive: true,
    },
  });

  console.log('Seed data created.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 