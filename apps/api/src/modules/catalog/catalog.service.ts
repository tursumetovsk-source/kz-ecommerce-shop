import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CatalogService {
  constructor(private readonly prisma: PrismaService) {}

  async getCategories() {
    return this.prisma.category.findMany({
      where: { parentId: null },
      include: {
        children: {
          include: { children: true },
        },
      },
    });
  }

  async getProducts(params: {
    categorySlug?: string;
    search?: string;
    brandSlug?: string;
    minPrice?: number;
    maxPrice?: number;
    sortBy?: string;
    page?: number;
    limit?: number;
  }) {
    const { categorySlug, search, brandSlug, minPrice, maxPrice, sortBy = 'createdAt', page = 1, limit = 20 } = params;

    const where: any = { status: 'ACTIVE' };

    if (categorySlug) {
      where.category = { slug: categorySlug };
    }

    if (brandSlug) {
      where.brand = { slug: brandSlug };
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { variants: { some: { sku: { contains: search, mode: 'insensitive' } } } },
      ];
    }

    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
      this.prisma.product.findMany({
        where,
        include: {
          category: true,
          brand: true,
          images: true,
          variants: {
            include: { inventory: true },
          },
        },
        skip,
        take: limit,
        orderBy: sortBy === 'priceAsc' ? { createdAt: 'desc' } : { createdAt: 'desc' },
      }),
      this.prisma.product.count({ where }),
    ]);

    return {
      products,
      meta: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    };
  }

  async getProductBySlug(slug: string) {
    const product = await this.prisma.product.findUnique({
      where: { slug },
      include: {
        category: true,
        brand: true,
        images: true,
        attributes: {
          include: { attribute: true },
        },
        variants: {
          include: { inventory: true },
        },
        reviews: {
          where: { status: 'PUBLISHED' },
          include: { user: { select: { firstName: true, lastName: true } } },
        },
      },
    });

    if (!product) {
      throw new NotFoundException(`Product with slug ${slug} not found`);
    }

    return product;
  }
}
