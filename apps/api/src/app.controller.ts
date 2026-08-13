import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Health Check')
@Controller()
export class AppController {
  @Get('health')
  @ApiOperation({ summary: 'API Health Check' })
  healthCheck() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'KZ E-Commerce Modular Monolith API',
    };
  }
}
