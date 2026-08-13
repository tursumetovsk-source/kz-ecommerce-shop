import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create Categories
  const electronics = await prisma.category.upsert({
    where: { slug: 'electronics' },
    update: {},
    create: {
      slug: 'electronics',
      name: 'Электроника',
      description: 'Электроника и гаджеты',
    },
  });

  const smartphones = await prisma.category.upsert({
    where: { slug: 'smartphones' },
    update: {},
    create: {
      slug: 'smartphones',
      name: 'Смартфоны',
      description: 'Мобильные телефоны и смартфоны',
      parentId: electronics.id,
    },
  });

  const laptops = await prisma.category.upsert({
    where: { slug: 'laptops' },
    update: {},
    create: {
      slug: 'laptops',
      name: 'Ноутбуки',
      description: 'Ноутбуки и портативные компьютеры',
      parentId: electronics.id,
    },
  });

  // Create Brands
  const apple = await prisma.brand.upsert({
    where: { slug: 'apple' },
    update: {},
    create: {
      slug: 'apple',
      name: 'Apple',
    },
  });

  const samsung = await prisma.brand.upsert({
    where: { slug: 'samsung' },
    update: {},
    create: {
      slug: 'samsung',
      name: 'Samsung',
    },
  });

  // Create Product: iPhone 17 Pro
  const iphone17 = await prisma.product.upsert({
    where: { slug: 'iphone-17-pro-256-black' },
    update: {},
    create: {
      slug: 'iphone-17-pro-256-black',
      name: 'Смартфон Apple iPhone 17 Pro 256GB Black Titanium',
      description: 'Мощнейший флагман с процессором A18 Pro и камерой с титановым корпусом.',
      categoryId: smartphones.id,
      brandId: apple.id,
      status: 'ACTIVE',
      images: {
        create: [
          {
            url: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop&q=60',
            isPrimary: true,
          },
        ],
      },
      variants: {
        create: [
          {
            sku: 'IP17P-256-BLK',
            barcode: '194253000123',
            price: BigInt(699990),
            oldPrice: BigInt(749990),
            status: 'ACTIVE',
            fiscalName: 'Смартфон Apple iPhone 17 Pro 256GB',
            nktCode: '8517120000',
            inventory: {
              create: {
                quantity: 10,
                reservedQuantity: 0,
              },
            },
          },
        ],
      },
    },
  });

  console.log('✅ Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
