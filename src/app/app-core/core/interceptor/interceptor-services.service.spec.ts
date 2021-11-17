import { TestBed } from '@angular/core/testing';

import { InterceptorServicesService } from './interceptor-services.service';

describe('InterceptorServicesService', () => {
  let service: InterceptorServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
