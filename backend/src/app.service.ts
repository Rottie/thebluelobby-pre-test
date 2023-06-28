import { Injectable } from '@nestjs/common';
import { TaskService } from './tasks/task.service';
import { Task } from './tasks/task.entity';


@Injectable()
export class AppService {
  constructor(private taskService: TaskService) {}

  getHello(): { data: string } {
    return { data: 'Hello World!' };
  }

  async getAllTasks(): Promise<Task[]> {
    return this.taskService.getAllTasks();
  }

  
}

