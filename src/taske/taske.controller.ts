import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskeService } from './taske.service';
import { CreateTaskeDto } from './dto/create-taske.dto';
import { UpdateTaskeDto } from './dto/update-taske.dto';

@Controller('taske')
export class TaskeController {
  constructor(private readonly taskeService: TaskeService) {}

  @Post()
  create(@Body() createTaskeDto: CreateTaskeDto) {
    return this.taskeService.create(createTaskeDto);
  }

  @Get()
  findAll() {
    return this.taskeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskeDto: UpdateTaskeDto) {
    return this.taskeService.update(+id, updateTaskeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskeService.remove(+id);
  }
}
