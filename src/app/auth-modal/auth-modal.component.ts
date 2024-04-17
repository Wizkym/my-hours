import { Component, Input } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-auth-modal",
  templateUrl: "./auth-modal.component.html",
  styleUrls: ["./auth-modal.component.css"],
})
export class AuthModalComponent {
  @Input() id: number;
  myForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      answer: "",
    });
  }

  submitForm() {
    this.activeModal.close(this.myForm.value);
  }
}
