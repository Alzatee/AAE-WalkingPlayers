import { TestBed } from '@angular/core/testing';

import { ModalLoadServicesService } from './modal-load-services.service';

describe('ModalLoadServicesService', () => {
  let service: ModalLoadServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalLoadServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
