export class CreateSpectacleDto {
  id: string;

  idw: string;

  nazwa: string;

  rezyseria: string;

  czas_trwania_min: string | Record<string, unknown>;

  data: string;

  godzina: string;

  miejsce: string;

  miejsca_dostepne: string;

  url: string;
}
