import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Sentence,
  SentenceDocument,
} from 'morgana-english-shared/dist/models/sentence.model.js';
import { CreateSentenceDto } from './dto/create-sentence.dto.js';
import { Strings } from '../data/strings.js';
import { Models } from '../data/enums.js';
import { CreateSentenceArrayDto } from './dto/create-sentence-array.dto.js';

@Injectable()
export class SentenceService {
  constructor(
    @InjectModel(Sentence.name)
    private readonly sentenceModel: Model<SentenceDocument>,
  ) {}

  async create(dto: CreateSentenceDto) {
    const sentence = await this.sentenceModel.create(dto);
    if (!sentence)
      throw new HttpException(
        Strings.modelNotCreated(Models.Sentence),
        HttpStatus.NOT_IMPLEMENTED,
      );

    return sentence;
  }

  async createMany(sentences: CreateSentenceDto[]) {
    try {
      const words = await this.sentenceModel.insertMany(sentences, {
        ordered: false,
      });
      return words;
    } catch (error) {
      if (error.code === 11000) {
        console.error('Some duplicate words were ignored');
      } else {
        throw error;
      }
    }
  }

  async getOneRandom() {
    const sentence = await this.sentenceModel.findOne({ used: false });
    if (!sentence)
      throw new HttpException(
        Strings.noUnusedModelLeft(Models.Sentence),
        HttpStatus.NOT_FOUND,
      );

    await sentence.updateOne({ used: true });
    return sentence;
  }

  async resetUsed() {
    await this.sentenceModel.updateMany({}, { used: false });
  }
}
