import { Test, TestingModule } from '@nestjs/testing';
import { SpectacleController } from './spectacle.controller';
import { SpectacleService } from './spectacle.service';

describe('SpectacleController', () => {
  let controller: SpectacleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpectacleController],
      providers: [SpectacleService],
    }).compile();

    controller = module.get<SpectacleController>(SpectacleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
