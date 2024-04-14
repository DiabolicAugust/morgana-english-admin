import { Module } from '@nestjs/common';
import { SentenceController } from './sentence.controller';
import { SentenceService } from './sentence.service';
import { SharedSentenceModel } from 'morgana-english-shared/dist/index.js';

@Module({
  controllers: [SentenceController],
  providers: [SentenceService],
  imports: [SharedSentenceModel],
})
export class SentenceModule {}
