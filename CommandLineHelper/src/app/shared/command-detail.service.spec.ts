import { TestBed } from '@angular/core/testing';

import { CommandDetailService } from './command-detail.service';

describe('CommandDetailService', () => {
  let service: CommandDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
