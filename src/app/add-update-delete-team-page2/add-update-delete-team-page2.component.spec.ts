import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDeleteTeamPage2Component } from './add-update-delete-team-page2.component';

describe('AddUpdateDeleteTeamPage2Component', () => {
  let component: AddUpdateDeleteTeamPage2Component;
  let fixture: ComponentFixture<AddUpdateDeleteTeamPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateDeleteTeamPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateDeleteTeamPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
