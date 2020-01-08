import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiPopUpComponent } from './kpi-pop-up.component';

describe('KpiPopUpComponent', () => {
  let component: KpiPopUpComponent;
  let fixture: ComponentFixture<KpiPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
