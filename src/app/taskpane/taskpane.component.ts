import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from './shared/tasks.service';

@Component({
  selector: 'app-taskpane',
  templateUrl: './taskpane.component.html',
  styleUrls: ['./taskpane.component.css']
})
export class TaskpaneComponent implements OnInit {
  @Output() close = new EventEmitter;
  isStarted = false;
  tasks: string[] = [];

  constructor(private taskSvc: TaskService) {}

  ngOnInit() {}

  onBackBtnClick() {
    this.close.emit();
  }

  onFormSubmit(task) {
    this.isStarted = false;
    console.log(task);
    this.taskSvc.TASKS.push(task);
  }
}
