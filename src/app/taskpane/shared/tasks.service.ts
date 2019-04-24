import { Injectable } from '@angular/core';
import { Task } from './task.interface';

@Injectable()
export class TaskService {
  TASKS: Task[] = [];
  constructor() {}

  getTasks() {
    return this.TASKS;
  }
}
