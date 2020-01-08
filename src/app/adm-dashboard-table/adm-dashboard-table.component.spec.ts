import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDashboardTableComponent } from './adm-dashboard-table.component';

describe('AdmDashboardTableComponent', () => {
  let component: AdmDashboardTableComponent;
  let fixture: ComponentFixture<AdmDashboardTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDashboardTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDashboardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
