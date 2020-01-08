import { TestBed, inject } from '@angular/core/testing';

import { SmmService } from './smm.service';

describe('SmmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmmService]
    });
  });

  it('should be created', inject([SmmService], (service: SmmService) => {
    expect(service).toBeTruthy();
  }));
});
