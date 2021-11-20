import { TestBed } from '@angular/core/testing';

import { FireStorageFunctionsService } from './fire-storage-functions.service';

describe('FireStorageFunctionsService', () => {
  let service: FireStorageFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireStorageFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
