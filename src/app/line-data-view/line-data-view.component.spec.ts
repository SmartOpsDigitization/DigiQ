import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineDataViewComponent } from './line-data-view.component';

describe('LineDataViewComponent', () => {
  let component: LineDataViewComponent;
  let fixture: ComponentFixture<LineDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineDataViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
