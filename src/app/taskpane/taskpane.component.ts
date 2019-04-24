import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(private modalService: NgbModal,
              private taksSvc: TaskService) {}

  ngOnInit() {}

  onBackBtnClick() {
    this.close.emit();
  }

  onFormSubmit(form) {
    this.isStarted = false;
    console.log(form);

  }

}
