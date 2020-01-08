import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardTableComponent } from './dash-board-table.component';

describe('DashBoardTableComponent', () => {
  let component: DashBoardTableComponent;
  let fixture: ComponentFixture<DashBoardTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoardTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
