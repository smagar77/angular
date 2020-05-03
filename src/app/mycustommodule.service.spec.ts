import { TestBed } from '@angular/core/testing';

import { MycustommoduleService } from './mycustommodule.service';

describe('MycustommoduleService', () => {
  let service: MycustommoduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycustommoduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
