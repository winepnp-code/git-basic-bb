import { Test, TestingModule } from '@nestjs/testing';
import { TaskeController } from './taske.controller';
import { TaskeService } from './taske.service';

describe('TaskeController', () => {
  let controller: TaskeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskeController],
      providers: [TaskeService],
    }).compile();

    controller = module.get<TaskeController>(TaskeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
