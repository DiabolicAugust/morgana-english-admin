import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  DayWord,
  DayWordDocument,
} from 'morgana-english-shared/dist/models/day-word.model.js';
import { CreateDayWordDto } from './dto/create-day-word.dto.js';
import { Strings } from '../data/strings.js';
import { Models } from '../data/enums.js';

@Injectable()
export class DayWordService {
  constructor(
    @InjectModel(DayWord.name)
    private readonly dayWordModel: Model<DayWordDocument>,
  ) {}
  async create(dto: CreateDayWordDto) {
    console.log(await this.dayWordModel.create({ history: 'sss' }));
    const dayWord = await this.dayWordModel.create(dto);
    if (!dayWord)
      throw new HttpException(
        Strings.modelNotCreated(Models.DayWord),
        HttpStatus.BAD_REQUEST,
      );
    return dayWord.save();
  }

  async createMany(content: CreateDayWordDto[]) {
    try {
      // Вставка нових документів, ігноруючи дублікати
      const words = await this.dayWordModel.insertMany(content, {
        ordered: false,
      });
      return words;
    } catch (error) {
      // Обробка помилок, пов'язаних з дублікатами
      if (error.code === 11000) {
        // Логіка для обробки помилок дублікатів
        console.error('Some duplicate words were ignored');
      } else {
        // Логіка для обробки інших помилок
        throw error;
      }
    }
  }

  async getOneRandom() {
    const dayWord = await this.dayWordModel.findOne({ used: false });
    if (!dayWord)
      throw new HttpException(
        Strings.noUnusedModelLeft(Models.DayWord),
        HttpStatus.NOT_FOUND,
      );

    await dayWord.updateOne({ used: true });
    return dayWord;
  }

  async resetUsed() {
    await this.dayWordModel.updateMany({}, { used: false });
  }
}
