import { Injectable } from '@nestjs/common';
import { CreateSpectacleDto } from './dto/create-spectacle.dto';
import { UpdateSpectacleDto } from './dto/update-spectacle.dto';
import { mockSpectacleData } from './spectacle.mock.data';

export let mock_db = [...mockSpectacleData];

@Injectable()
export class SpectacleService {
  create(createSpectacleDto: CreateSpectacleDto) {
    return mock_db.push(createSpectacleDto);
  }

  findAll() {
    return mock_db;
  }

  findOne(id: number) {
    return mock_db.find((spectacle) => spectacle.id === String(id));
  }

  update(id: number, updateSpectacleDto: UpdateSpectacleDto) {
    return (mock_db = mock_db.map((spectacle) => {
      if (spectacle.id === String(id)) {
        return { ...spectacle, ...updateSpectacleDto };
      }
      return spectacle;
    }));
  }

  remove(id: number) {
    return (mock_db = mock_db.filter(
      (spectacle) => spectacle.id !== String(id),
    ));
  }
}
