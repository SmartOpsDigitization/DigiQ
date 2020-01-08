import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDashboardTableSelectorComponent } from './team-dashboard-table-selector.component';

describe('TeamDashboardTableSelectorComponent', () => {
  let component: TeamDashboardTableSelectorComponent;
  let fixture: ComponentFixture<TeamDashboardTableSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDashboardTableSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDashboardTableSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
