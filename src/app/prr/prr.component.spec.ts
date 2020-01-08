import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrrComponent } from './prr.component';

describe('PrrComponent', () => {
  let component: PrrComponent;
  let fixture: ComponentFixture<PrrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
