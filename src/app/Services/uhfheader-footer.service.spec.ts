import { TestBed } from '@angular/core/testing';

import { UHFHeaderFooterService } from './uhfheader-footer.service';

describe('UHFHeaderFooterService', () => {
  let service: UHFHeaderFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UHFHeaderFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
