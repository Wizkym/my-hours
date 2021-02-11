import { Component } from '@angular/core';
import { TaskService } from '../shared/tasks.service';

@Component({
  selector: 'app-taskpane',
  templateUrl: './taskpane.component.html',
  styleUrls: ['./taskpane.component.css']
})
export class TaskpaneComponent {

  constructor(public taskSvc: TaskService) {}

  onClearClick() {
    this.taskSvc.TASKS.length = 0;
  }
}
