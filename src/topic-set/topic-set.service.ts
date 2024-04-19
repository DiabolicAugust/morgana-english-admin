import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Word,
  WordDocument,
} from 'morgana-english-shared/dist/models/word.model.js';
import {
  TopicSet,
  TopicSetDocument,
} from 'morgana-english-shared/dist/models/topic-set.model.js';
import { Model } from 'mongoose';
import { CreateTopicSetDto } from './dto/create-topic-set.dto.js';
import { Strings } from '../data/strings.js';
import { Models } from '../data/enums.js';

@Injectable()
export class TopicSetService {
  constructor(
    @InjectModel(Word.name) private readonly wordModel: Model<WordDocument>,
    @InjectModel(TopicSet.name)
    private readonly topicSetModel: Model<TopicSetDocument>,
  ) {}

  async createMany(dto: CreateTopicSetDto[]) {
    try {
      const topicSets = await this.topicSetModel.insertMany(dto, {
        ordered: false,
      });

      return topicSets;
    } catch (error) {
      if (error.code === 11000) {
        console.error('Some duplicate words were ignored');
      } else {
        throw error;
      }
    }
  }

  async getOne() {
    const topicSet = await this.topicSetModel.findOne({ used: false });
    if (!topicSet)
      throw new HttpException(
        Strings.noUnusedModelLeft(Models.TopicSet),
        HttpStatus.NOT_IMPLEMENTED,
      );
    await topicSet.updateOne({ used: true });

    return topicSet;
  }

  async resetUsed() {
    await this.topicSetModel.updateMany({}, { used: false });
  }
}
