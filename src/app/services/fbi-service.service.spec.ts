import { TestBed } from '@angular/core/testing';

import { FbiServiceService } from './fbi-service.service';

describe('FbiServiceService', () => {
  let service: FbiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
