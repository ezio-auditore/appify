import { TestBed } from '@angular/core/testing';

import { UiFetchService } from './ui-fetch.service';

describe('UiFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiFetchService = TestBed.get(UiFetchService);
    expect(service).toBeTruthy();
  });
});
