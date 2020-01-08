import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDeleteKpiComponent } from './add-update-delete-kpi.component';

describe('AddUpdateDeleteKpiComponent', () => {
  let component: AddUpdateDeleteKpiComponent;
  let fixture: ComponentFixture<AddUpdateDeleteKpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateDeleteKpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateDeleteKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
