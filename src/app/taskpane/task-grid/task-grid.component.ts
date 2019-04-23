import { Component, OnInit } from '@angular/core';
import { DateTimeAdapter } from 'ng-pick-datetime';


interface Task {
  firstName: string,
  lastName: string,
  from: Date,
  to: Date,
  description: string
}

const TASKS: Task[] = [];

@Component({
  selector: 'app-task-grid',
  templateUrl: './task-grid.component.html',
  styleUrls: ['./task-grid.component.css']
})

export class TaskGridComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
