import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Output() task = new EventEmitter;
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
    const newTask = {
      firstName: this.myForm.value.firstName,
      lastName: this.myForm.value.lastName,
      from: this.myForm.value.range[0].toLocaleString(),
      to: this.myForm.value.range[1].toLocaleString(),
      description: this.myForm.value.description
    }
    this.task.emit(newTask);
  }

  onCancelClick() {
    this.cancel.emit();
  }

}
