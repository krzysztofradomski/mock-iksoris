import { PartialType } from '@nestjs/swagger';
import { CreateIksorisDto } from './create-iksoris.dto';

export class UpdateIksorisDto extends PartialType(CreateIksorisDto) {}
