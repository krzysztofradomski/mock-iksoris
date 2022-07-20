import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { SpectacleModule } from './spectacle/spectacle.module';
import { IksorisModule } from './iksoris/iksoris.module';

@Module({
  imports: [SpectacleModule, IksorisModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
