import { TestBed } from '@angular/core/testing';

import { BusinessStorageService } from './business-storage.service';

describe('BusinessStorageService', () => {
  let service: BusinessStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
