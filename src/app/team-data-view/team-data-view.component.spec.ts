import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDataViewComponent } from './team-data-view.component';

describe('TeamDataViewComponent', () => {
  let component: TeamDataViewComponent;
  let fixture: ComponentFixture<TeamDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDataViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
