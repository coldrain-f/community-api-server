import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
