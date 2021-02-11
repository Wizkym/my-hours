import { Injectable } from '@angular/core';
import { Task } from './task.interface';

@Injectable({ providedIn: 'root' })
export class TaskService {
  TASKS: Task[] = [];
  hasAccess = false;

  constructor() { }

  getTasks() {
    return this.TASKS;
  }
}
