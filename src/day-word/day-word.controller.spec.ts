import { Test, TestingModule } from '@nestjs/testing';
import { DayWordController } from './day-word.controller';

describe('DayWordController', () => {
  let controller: DayWordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DayWordController],
    }).compile();

    controller = module.get<DayWordController>(DayWordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
