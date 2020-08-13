import { TestBed } from '@angular/core/testing';

import { EmpServService } from './emp-serv.service';

describe('EmpServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpServService = TestBed.get(EmpServService);
    expect(service).toBeTruthy();
  });
});
