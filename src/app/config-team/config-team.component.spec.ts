import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTeamComponent } from './config-team.component';

describe('ConfigTeamComponent', () => {
  let component: ConfigTeamComponent;
  let fixture: ComponentFixture<ConfigTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
