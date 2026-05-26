import { TestBed } from '@angular/core/testing';

import { LettoreService } from './lettore.service';

describe('Lettore', () => {
  let service: LettoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LettoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
