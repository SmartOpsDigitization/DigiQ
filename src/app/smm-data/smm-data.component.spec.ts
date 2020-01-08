import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmmDataComponent } from './smm-data.component';

describe('SmmDataComponent', () => {
  let component: SmmDataComponent;
  let fixture: ComponentFixture<SmmDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmmDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmmDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
