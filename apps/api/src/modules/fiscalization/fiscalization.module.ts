import { Module } from '@nestjs/common';
import { FiscalizationService } from './fiscalization.service';

@Module({
  providers: [FiscalizationService],
  exports: [FiscalizationService],
})
export class FiscalizationModule {}
