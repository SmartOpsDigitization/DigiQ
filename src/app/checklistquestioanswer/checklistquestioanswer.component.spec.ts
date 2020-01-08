import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistquestioanswerComponent } from './checklistquestioanswer.component';

describe('ChecklistquestioanswerComponent', () => {
  let component: ChecklistquestioanswerComponent;
  let fixture: ComponentFixture<ChecklistquestioanswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistquestioanswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistquestioanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
