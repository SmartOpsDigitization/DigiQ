import { TestBed, inject } from '@angular/core/testing';

import { NtnetdataService } from './ntnetdata.service';

describe('NtnetdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NtnetdataService]
    });
  });

  it('should be created', inject([NtnetdataService], (service: NtnetdataService) => {
    expect(service).toBeTruthy();
  }));
});
