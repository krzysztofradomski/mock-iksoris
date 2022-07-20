import { Injectable } from '@nestjs/common';
import { mock_db } from '../spectacle/spectacle.service';

@Injectable()
export class IksorisService {
  findAll() {
    return {
      spektakl: mock_db,
    };
  }
}
