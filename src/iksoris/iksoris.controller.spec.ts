import { Test, TestingModule } from '@nestjs/testing';
import { IksorisController } from './iksoris.controller';
import { IksorisService } from './iksoris.service';

describe('IksorisController', () => {
  let controller: IksorisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IksorisController],
      providers: [IksorisService],
    }).compile();

    controller = module.get<IksorisController>(IksorisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
