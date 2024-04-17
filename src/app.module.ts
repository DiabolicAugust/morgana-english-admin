import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { DayWordModule } from './day-word/day-word.module';
import { SentenceModule } from './sentence/sentence.module';
import { FactModule } from './fact/fact.module';
import { TopicSetModule } from './topic-set/topic-set.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DATABSE_URL),
    DayWordModule,
    SentenceModule,
    FactModule,
    TopicSetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
