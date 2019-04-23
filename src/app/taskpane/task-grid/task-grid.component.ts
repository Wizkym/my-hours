import { Component, OnInit } from '@angular/core';
import { DateTimeAdapter } from 'ng-pick-datetime';


interface Task {
  firstName: string,
  lastName: string,
  from: string,
  to: string,
  description: string
}

const TASKS: Task[] = [
  {
    firstName: "Josh",
    lastName: "Outlaw",
    from: "Tue Apr 16 2019 11:51",
    to: "Tue Apr 23 2019 11:51",
    description: "In a world filled with hate, I am the man."
  }
];

@Component({
  selector: 'app-task-grid',
  templateUrl: './task-grid.component.html',
  styleUrls: ['./task-grid.component.css']
})

export class TaskGridComponent implements OnInit {
  tasks = TASKS;
  constructor() { }

  ngOnInit() {
  }

}
