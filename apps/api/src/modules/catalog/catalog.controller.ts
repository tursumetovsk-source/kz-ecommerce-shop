import { Controller, Get, Query, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CatalogService } from './catalog.service';

@ApiTags('Catalog')
@Controller()
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get('categories')
  @ApiOperation({ summary: 'Get nested categories tree' })
  async getCategories() {
    const data = await this.catalogService.getCategories();
    return { data };
  }

  @Get('products')
  @ApiOperation({ summary: 'Search and filter catalog products' })
  async getProducts(
    @Query('category') categorySlug?: string,
    @Query('search') search?: string,
    @Query('brand') brandSlug?: string,
    @Query('minPrice') minPrice?: number,
    @Query('maxPrice') maxPrice?: number,
    @Query('sortBy') sortBy?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    const result = await this.catalogService.getProducts({
      categorySlug,
      search,
      brandSlug,
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      sortBy,
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 20,
    });
    return { data: result.products, meta: result.meta };
  }

  @Get('products/:slug')
  @ApiOperation({ summary: 'Get product details by slug' })
  async getProductBySlug(@Param('slug') slug: string) {
    const data = await this.catalogService.getProductBySlug(slug);
    return { data };
  }
}
