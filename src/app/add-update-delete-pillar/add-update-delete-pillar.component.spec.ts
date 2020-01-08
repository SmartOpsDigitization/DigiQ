import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDeletePillarComponent } from './add-update-delete-pillar.component';

describe('AddUpdateDeletePillarComponent', () => {
  let component: AddUpdateDeletePillarComponent;
  let fixture: ComponentFixture<AddUpdateDeletePillarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateDeletePillarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateDeletePillarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
