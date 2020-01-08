import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDeleteTeamComponent } from './add-update-delete-team.component';

describe('AddUpdateDeleteTeamComponent', () => {
  let component: AddUpdateDeleteTeamComponent;
  let fixture: ComponentFixture<AddUpdateDeleteTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateDeleteTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateDeleteTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
