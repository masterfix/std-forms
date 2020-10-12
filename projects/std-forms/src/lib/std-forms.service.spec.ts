import { TestBed } from '@angular/core/testing';

import { StdFormsService } from './std-forms.service';

describe('StdFormsService', () => {
  let service: StdFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StdFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
