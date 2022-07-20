import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IksorisService } from './iksoris.service';

@ApiTags('iksoris')
@Controller('iksoris')
export class IksorisController {
  constructor(private readonly iksorisService: IksorisService) {}

  @Get()
  findAll() {
    return this.iksorisService.findAll();
  }
}
