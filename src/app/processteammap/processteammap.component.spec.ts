import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessteammapComponent } from './processteammap.component';

describe('ProcessteammapComponent', () => {
  let component: ProcessteammapComponent;
  let fixture: ComponentFixture<ProcessteammapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessteammapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessteammapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
