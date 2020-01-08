import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendTeamComponent } from './legend-team.component';

describe('LegendTeamComponent', () => {
  let component: LegendTeamComponent;
  let fixture: ComponentFixture<LegendTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
