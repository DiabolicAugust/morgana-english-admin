import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Fact,
  FactDocument,
} from 'morgana-english-shared/dist/models/fact.model.js';
import { CreateFactDto } from './dto/fact.dto.js';
import { Strings } from '../data/strings.js';
import { Models } from '../data/enums.js';

@Injectable()
export class FactService {
  constructor(
    @InjectModel(Fact.name) private readonly factModel: Model<FactDocument>,
  ) {}

  async createMany(facts: CreateFactDto[]) {
    try {
      const factsInsered = await this.factModel.insertMany(facts, {
        ordered: false,
      });
      return factsInsered;
    } catch (error) {
      if (error.code === 11000) {
        console.error('Some duplicate words were ignored');
      } else {
        throw error;
      }
    }
  }

  async getOne() {
    const fact = await this.factModel.findOne({ used: false });
    if (!fact)
      throw new HttpException(
        Strings.noUnusedModelLeft(Models.Fact),
        HttpStatus.NOT_IMPLEMENTED,
      );
    return fact;
  }

  async resetUsed() {
    await this.factModel.updateMany({}, { used: false });
  }
}
