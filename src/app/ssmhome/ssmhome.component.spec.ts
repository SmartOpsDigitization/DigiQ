import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsmhomeComponent } from './ssmhome.component';

describe('SsmhomeComponent', () => {
  let component: SsmhomeComponent;
  let fixture: ComponentFixture<SsmhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsmhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsmhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
