import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthModalComponent } from '../auth-modal/auth-modal.component';
import { TaskService } from '../shared/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  starterTxt: string;

  constructor(private modalService: NgbModal, private taskSvc: TaskService, private router: Router) {}

  ngOnInit() {
    this.starterTxt = (this.taskSvc.TASKS && this.taskSvc.TASKS.length > 0)
      ? 'View Tasks' : 'Get Started';
  }

  openFormModal() {
    if (!this.taskSvc.hasAccess) {
      const modalRef = this.modalService.open(AuthModalComponent, { centered: true });
      modalRef.componentInstance.id = 10;
      modalRef.result.then((result) => {
        if (result.answer.trim().toLowerCase() === 'nairobi') {
          this.taskSvc.hasAccess = true;
          this.router.navigate(['tasks']);
        } else {
          alert('Uh..You sure?\nTry Again!');
        }
      }).catch((error) => {
        console.log(error);
      });
    } else {
      this.router.navigate(['tasks']);
    }
  }

  onCloseEmit () {
    this.taskSvc.hasAccess = true;
  }
}
