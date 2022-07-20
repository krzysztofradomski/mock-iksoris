import { Test, TestingModule } from '@nestjs/testing';
import { SpectacleService } from './spectacle.service';

describe('SpectacleService', () => {
  let service: SpectacleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpectacleService],
    }).compile();

    service = module.get<SpectacleService>(SpectacleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
