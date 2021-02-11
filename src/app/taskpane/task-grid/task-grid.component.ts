import { Component, OnInit } from '@angular/core';
import { DateTimeAdapter } from 'ng-pick-datetime';
import { Task } from '../../shared/task.interface';
import { TaskService } from '../../shared/tasks.service';

@Component({
  selector: 'app-task-grid',
  templateUrl: './task-grid.component.html',
  styleUrls: ['./task-grid.component.css']
})

export class TaskGridComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskSvc: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskSvc.getTasks();
  }

  onFinalizeClick() {
    alert('Ima finalize you real good!');
  }
}
