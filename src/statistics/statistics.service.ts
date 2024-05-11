import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Fact,
  FactDocument,
} from 'morgana-english-shared/dist/models/fact.model.js';
import {
  Sentence,
  SentenceDocument,
} from 'morgana-english-shared/dist/models/sentence.model.js';
import {
  TopicSet,
  TopicSetDocument,
} from 'morgana-english-shared/dist/models/topic-set.model.js';
import { Models } from '../data/enums.js';
import { Strings } from '../data/strings.js';
import Statistics from './interface/statistics.interface.js';

@Injectable()
export class StatisticsService {
  constructor(
    @InjectModel(TopicSet.name)
    private readonly topicSetsModel: Model<TopicSetDocument>,
    @InjectModel(Sentence.name)
    private readonly sentenceModel: Model<SentenceDocument>,
    @InjectModel(Fact.name) private readonly factModel: Model<FactDocument>,
  ) {}

  async getTopicSetsStatistics(): Promise<Statistics> {
    const allSets = await this.topicSetsModel.find();

    const unusedSets = allSets.filter((value) => value.used == false);

    return {
      overall: allSets.length,
      unused: unusedSets.length,
      warning:
        unusedSets.length < 7
          ? Strings.fewUnusedModelLeft(Models.TopicSet)
          : null,
      next: unusedSets[0] || null,
    };
  }

  async getFactStatistics(): Promise<Statistics> {
    const allFacts = await this.factModel.find();

    const unusedFacts = allFacts.filter((value) => value.used == false);

    return {
      overall: allFacts.length,
      unused: unusedFacts.length,
      warning:
        unusedFacts.length < 7
          ? Strings.fewUnusedModelLeft(Models.TopicSet)
          : null,
      next: unusedFacts[0] || null,
    };
  }

  async getSentenceStatistics(): Promise<Statistics> {
    const allSentences = await this.sentenceModel.find();

    const unusedSentences = allSentences.filter((value) => value.used == false);

    return {
      overall: allSentences.length,
      unused: unusedSentences.length,
      warning:
        unusedSentences.length < 7
          ? Strings.fewUnusedModelLeft(Models.TopicSet)
          : null,
      next: unusedSentences[0] || null,
    };
  }
}
