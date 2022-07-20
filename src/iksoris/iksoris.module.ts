import { Module } from '@nestjs/common';
import { IksorisService } from './iksoris.service';
import { IksorisController } from './iksoris.controller';

@Module({
  controllers: [IksorisController],
  providers: [IksorisService],
})
export class IksorisModule {}
