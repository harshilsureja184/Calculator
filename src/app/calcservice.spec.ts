import { TestBed } from '@angular/core/testing';

import { Calcservice } from './calcservice';

describe('Calcservice', () => {
  let service: Calcservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Calcservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
