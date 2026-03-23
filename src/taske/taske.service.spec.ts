import { Test, TestingModule } from '@nestjs/testing';
import { TaskeService } from './taske.service';

describe('TaskeService', () => {
  let service: TaskeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskeService],
    }).compile();

    service = module.get<TaskeService>(TaskeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
