import { Module } from '@nestjs/common';
import { SpectacleService } from './spectacle.service';
import { SpectacleController } from './spectacle.controller';

@Module({
  controllers: [SpectacleController],
  providers: [SpectacleService],
})
export class SpectacleModule {}
