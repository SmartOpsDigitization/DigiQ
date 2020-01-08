import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDataViewComponent } from './adm-data-view.component';

describe('AdmDataViewComponent', () => {
  let component: AdmDataViewComponent;
  let fixture: ComponentFixture<AdmDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDataViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
