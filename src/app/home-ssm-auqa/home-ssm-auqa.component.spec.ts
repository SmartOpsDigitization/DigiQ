import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSsmAuqaComponent } from './home-ssm-auqa.component';

describe('HomeSsmAuqaComponent', () => {
  let component: HomeSsmAuqaComponent;
  let fixture: ComponentFixture<HomeSsmAuqaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSsmAuqaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSsmAuqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
