import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDeleteAccountComponent } from './add-update-delete-account.component';

describe('AddUpdateDeleteAccountComponent', () => {
  let component: AddUpdateDeleteAccountComponent;
  let fixture: ComponentFixture<AddUpdateDeleteAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateDeleteAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateDeleteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
