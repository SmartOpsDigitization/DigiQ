import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDashboardTableSelectorComponent } from './account-dashboard-table-selector.component';

describe('AccountDashboardTableSelectorComponent', () => {
  let component: AccountDashboardTableSelectorComponent;
  let fixture: ComponentFixture<AccountDashboardTableSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDashboardTableSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDashboardTableSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
