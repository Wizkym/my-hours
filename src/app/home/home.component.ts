import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthModalComponent } from '../auth-modal/auth-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isStarted = false;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  openFormModal() {
    const modalRef = this.modalService.open(AuthModalComponent, { centered: true });
    modalRef.componentInstance.id = 10;
    modalRef.result.then((result) => {
      console.log(result.answer);
      if (result.answer.trim().toLowerCase() === 'nairobi') {
        this.isStarted = true;
      } else {
        alert('Uh..You sure?\nTry Again!');
      }
    }).catch((error) => {
      console.log(error);
    });
  }
}
