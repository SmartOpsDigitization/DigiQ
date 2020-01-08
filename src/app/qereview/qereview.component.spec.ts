import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QereviewComponent } from './qereview.component';

describe('QereviewComponent', () => {
  let component: QereviewComponent;
  let fixture: ComponentFixture<QereviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QereviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QereviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
