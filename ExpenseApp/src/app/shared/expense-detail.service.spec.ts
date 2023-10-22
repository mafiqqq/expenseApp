import { TestBed } from '@angular/core/testing';

import { ExpenseDetailService } from './expense-detail.service';

describe('ExpenseDetailService', () => {
  let service: ExpenseDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
