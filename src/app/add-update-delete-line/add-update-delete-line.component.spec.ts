import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDeleteLineComponent } from './add-update-delete-line.component';

describe('AddUpdateDeleteLineComponent', () => {
  let component: AddUpdateDeleteLineComponent;
  let fixture: ComponentFixture<AddUpdateDeleteLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateDeleteLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateDeleteLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
