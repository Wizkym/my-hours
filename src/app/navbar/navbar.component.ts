import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/tasks.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;

  constructor(public taskSvc: TaskService) { }

  ngOnInit() {
  }

}
