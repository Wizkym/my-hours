import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-taskpane',
  templateUrl: './taskpane.component.html',
  styleUrls: ['./taskpane.component.css']
})
export class TaskpaneComponent implements OnInit {
  isStarted = false

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  onStartClick() {
    this.isStarted = true;
  }

  onFormSubmit(form) {
    this.isStarted = false;
    console.log(form);
  }

}
