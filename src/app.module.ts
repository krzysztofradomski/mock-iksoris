import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { SpectacleModule } from './spectacle/spectacle.module';

@Module({
  imports: [SpectacleModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
