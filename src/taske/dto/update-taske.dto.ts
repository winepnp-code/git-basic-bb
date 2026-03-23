import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskeDto } from './create-taske.dto';

export class UpdateTaskeDto extends PartialType(CreateTaskeDto) {}
