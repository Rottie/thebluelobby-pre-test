import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TaskService) {}
//    constructor(private readonly tasksService: TaskService) {}
  @Get()
  getAllTasks(): Promise<Task[]> {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: number): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  // @Post()
  // createTask(@Body() body: { title: string; description: string }): Promise<Task> {
  //   const { title, description } = body;

  //   return this.tasksService.createTask({ id: null, title, description });

  // }


  // @Put(':id')
  // updateTask(
  //   @Param('id') id: number,
  //   @Body() body: { title: string; description: string },
  // ): Promise<Task> {
  //   const { title, description } = body;
    
  //   //return this.tasksService.updateTask(id, { id: null, title, description });
  //    return this.tasksService.updateTask(id, { title, description });
  // }






  @Delete(':id')
  deleteTask(@Param('id') id: number): Promise<void> {
    return this.tasksService.deleteTask(id);
  }
}
