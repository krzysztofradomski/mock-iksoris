import { PartialType } from '@nestjs/mapped-types';
import { CreateSpectacleDto } from './create-spectacle.dto';

export class UpdateSpectacleDto extends PartialType(CreateSpectacleDto) {
  id?: string;

  idw?: string;

  nazwa?: string;

  rezyseria?: string;

  czas_trwania_min?: string;

  data?: string;

  godzina?: string;

  miejsce?: string;

  miejsca_dostepne?: string;

  url?: string;
}
