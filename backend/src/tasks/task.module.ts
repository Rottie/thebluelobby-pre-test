

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TasksController } from './task.controller';
import { TaskService } from './task.service';
import { Task } from './task.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Task]),
  ],
 
  providers: [TaskService],
  exports: [TaskService],
   controllers: [TasksController],
})
export class TaskModule {}
































