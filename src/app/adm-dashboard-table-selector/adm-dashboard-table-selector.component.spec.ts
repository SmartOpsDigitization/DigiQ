import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDashboardTableSelectorComponent } from './adm-dashboard-table-selector.component';

describe('AdmDashboardTableSelectorComponent', () => {
  let component: AdmDashboardTableSelectorComponent;
  let fixture: ComponentFixture<AdmDashboardTableSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDashboardTableSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDashboardTableSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
