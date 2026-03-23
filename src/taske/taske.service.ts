import { Injectable } from '@nestjs/common';
import { CreateTaskeDto } from './dto/create-taske.dto';
import { UpdateTaskeDto } from './dto/update-taske.dto';

@Injectable()
export class TaskeService {
  create(createTaskeDto: CreateTaskeDto) {
    return 'This action adds a new taske';
  }

  findAll() {
    return `This action returns all taske`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taske`;
  }

  update(id: number, updateTaskeDto: UpdateTaskeDto) {
    return `This action updates a #${id} taske`;
  }

  remove(id: number) {
    return `This action removes a #${id} taske`;
  }
}
