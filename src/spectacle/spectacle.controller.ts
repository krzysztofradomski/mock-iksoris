import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SpectacleService } from './spectacle.service';
import { CreateSpectacleDto } from './dto/create-spectacle.dto';
import { UpdateSpectacleDto } from './dto/update-spectacle.dto';

@Controller('spectacle')
export class SpectacleController {
  constructor(private readonly spectacleService: SpectacleService) {}

  @Post()
  create(@Body() createSpectacleDto: CreateSpectacleDto) {
    return this.spectacleService.create(createSpectacleDto);
  }

  @Get()
  findAll() {
    return this.spectacleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spectacleService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSpectacleDto: UpdateSpectacleDto,
  ) {
    return this.spectacleService.update(+id, updateSpectacleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spectacleService.remove(+id);
  }
}
