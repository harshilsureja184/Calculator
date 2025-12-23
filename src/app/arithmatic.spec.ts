import { TestBed } from '@angular/core/testing';

import { Arithmatic } from './arithmatic';

describe('Arithmatic', () => {
  let service: Arithmatic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Arithmatic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
