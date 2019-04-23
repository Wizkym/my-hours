import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Output() form = new EventEmitter;
  @Output() cancel = new EventEmitter;
  myForm: FormGroup;

  constructor( private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      range: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  submitForm() {
    this.form.emit(this.myForm.value);
  }

  onCancelClick() {
    this.cancel.emit();
  }

}
