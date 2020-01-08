import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedResponsesComponent } from './submitted-responses.component';

describe('SubmittedResponsesComponent', () => {
  let component: SubmittedResponsesComponent;
  let fixture: ComponentFixture<SubmittedResponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedResponsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
