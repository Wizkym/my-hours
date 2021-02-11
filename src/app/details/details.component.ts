import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Task } from '../shared/task.interface';
import { TaskService } from '../shared/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  myForm: FormGroup;

  constructor( private formBuilder: FormBuilder,
    private taskSvc: TaskService,
    private router: Router ) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      range: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  submitForm() {
    const newTask: Task = {
      firstName: this.myForm.value.firstName,
      lastName: this.myForm.value.lastName,
      from: this.myForm.value.range[0].toLocaleString(),
      to: this.myForm.value.range[1].toLocaleString(),
      description: this.myForm.value.description
    }
    this.taskSvc.TASKS.push(newTask);
    this.router.navigate(['/tasks']);
  }
}
