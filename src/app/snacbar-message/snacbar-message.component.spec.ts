import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnacbarMessageComponent } from './snacbar-message.component';

describe('SnacbarMessageComponent', () => {
  let component: SnacbarMessageComponent;
  let fixture: ComponentFixture<SnacbarMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnacbarMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnacbarMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
