import { TestBed } from '@angular/core/testing';

import { ContactHttpService } from './contact-http.service';

describe('ContactHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactHttpService = TestBed.get(ContactHttpService);
    expect(service).toBeTruthy();
  });
});
