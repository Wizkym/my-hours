import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-taskpane',
  templateUrl: './taskpane.component.html',
  styleUrls: ['./taskpane.component.css']
})
export class TaskpaneComponent implements OnInit {
  @Output() close = new EventEmitter;
  isStarted = false

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  onBackBtnClick() {
    this.close.emit();
  }

  onFormSubmit(form) {
    this.isStarted = false;
    console.log(form);
  }

}
