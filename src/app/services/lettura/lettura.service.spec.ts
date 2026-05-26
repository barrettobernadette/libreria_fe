import { TestBed } from '@angular/core/testing';

import { LetturaService } from './lettura.service';

describe('Lettura', () => {
  let service: LetturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LetturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
