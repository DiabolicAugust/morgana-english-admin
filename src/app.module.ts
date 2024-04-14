import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { DayWordModule } from './day-word/day-word.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DATABSE_URL),
    DayWordModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
