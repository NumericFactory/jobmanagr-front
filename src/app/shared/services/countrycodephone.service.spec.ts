import { TestBed } from '@angular/core/testing';

import { CountrycodephoneService } from './countrycodephone.service';

describe('CountrycodephoneService', () => {
  let service: CountrycodephoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountrycodephoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
