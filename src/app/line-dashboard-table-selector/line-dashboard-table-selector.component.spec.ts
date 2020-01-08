import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineDashboardTableSelectorComponent } from './line-dashboard-table-selector.component';

describe('LineDashboardTableSelectorComponent', () => {
  let component: LineDashboardTableSelectorComponent;
  let fixture: ComponentFixture<LineDashboardTableSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineDashboardTableSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineDashboardTableSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
