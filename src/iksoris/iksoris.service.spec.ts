import { Test, TestingModule } from '@nestjs/testing';
import { IksorisService } from './iksoris.service';

describe('IksorisService', () => {
  let service: IksorisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IksorisService],
    }).compile();

    service = module.get<IksorisService>(IksorisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
