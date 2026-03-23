import { Module } from '@nestjs/common';
import { TaskeService } from './taske.service';
import { TaskeController } from './taske.controller';

@Module({
  controllers: [TaskeController],
  providers: [TaskeService],
})
export class TaskeModule {}
