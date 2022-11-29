import { TestBed } from '@angular/core/testing';

import { LabelClassificationService } from './label-classification.service';

describe('LabelClassificationService', () => {
  let service: LabelClassificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabelClassificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
