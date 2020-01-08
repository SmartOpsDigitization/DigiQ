import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmmProcessSelectionComponent } from './smm-process-selection.component';

describe('SmmProcessSelectionComponent', () => {
  let component: SmmProcessSelectionComponent;
  let fixture: ComponentFixture<SmmProcessSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmmProcessSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmmProcessSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
