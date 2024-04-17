import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TaskpaneComponent } from './taskpane.component';

describe('TaskpaneComponent', () => {
  let component: TaskpaneComponent;
  let fixture: ComponentFixture<TaskpaneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskpaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskpaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
