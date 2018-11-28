import { TestBed } from '@angular/core/testing';

import { ContactLocalStorageService } from './contact-local-storage.service';

describe('ContactLocalStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactLocalStorageService = TestBed.get(ContactLocalStorageService);
    expect(service).toBeTruthy();
  });
});
