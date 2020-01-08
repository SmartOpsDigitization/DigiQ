import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistquestionanswerComponent } from './checklistquestionanswer.component';

describe('ChecklistquestionanswerComponent', () => {
  let component: ChecklistquestionanswerComponent;
  let fixture: ComponentFixture<ChecklistquestionanswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistquestionanswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistquestionanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
