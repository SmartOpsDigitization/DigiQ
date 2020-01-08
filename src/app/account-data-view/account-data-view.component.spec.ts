import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDataViewComponent } from './account-data-view.component';

describe('AccountDataViewComponent', () => {
  let component: AccountDataViewComponent;
  let fixture: ComponentFixture<AccountDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDataViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
