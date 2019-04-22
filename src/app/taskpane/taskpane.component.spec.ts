import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskpaneComponent } from './taskpane.component';

describe('TaskpaneComponent', () => {
  let component: TaskpaneComponent;
  let fixture: ComponentFixture<TaskpaneComponent>;

  beforeEach(async(() => {
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
