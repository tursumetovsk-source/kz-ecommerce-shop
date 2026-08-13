import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register customer account' })
  async register(@Body() dto: any) {
    const data = await this.authService.register(dto);
    return { data };
  }

  @Post('login')
  @ApiOperation({ summary: 'Login customer account' })
  async login(@Body() dto: any) {
    const data = await this.authService.login(dto);
    return { data };
  }
}
