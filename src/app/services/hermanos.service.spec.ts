import { TestBed } from '@angular/core/testing';

import { HermanosService } from './hermanos.service';

describe('HermanosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HermanosService = TestBed.get(HermanosService);
    expect(service).toBeTruthy();
  });
});
