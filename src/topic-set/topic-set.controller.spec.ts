import { Test, TestingModule } from '@nestjs/testing';
import { TopicSetController } from './topic-set.controller';

describe('TopicSetController', () => {
  let controller: TopicSetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TopicSetController],
    }).compile();

    controller = module.get<TopicSetController>(TopicSetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
