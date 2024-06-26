import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { Task } from '../shared/task.interface';
import { TaskService } from '../shared/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  myForm: UntypedFormGroup;

  constructor( private formBuilder: UntypedFormBuilder,
    private taskSvc: TaskService,
    private router: Router ) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      firstName: new UntypedFormControl('', Validators.required),
      lastName: new UntypedFormControl('', Validators.required),
      startDate: new UntypedFormControl('', Validators.required),
      endDate: new UntypedFormControl('', Validators.required),
      description: new UntypedFormControl('', Validators.required)
    });
  }

  submitForm() {
    const newTask: Task = {
      firstName: this.myForm.value.firstName,
      lastName: this.myForm.value.lastName,
      from: this.myForm.value.startDate.toLocaleString(),
      to: this.myForm.value.endDate.toLocaleString(),
      description: this.myForm.value.description
    }
    this.taskSvc.TASKS.push(newTask);
    this.router.navigate(['/tasks']);
  }
}
