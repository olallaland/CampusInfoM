import { TestBed } from '@angular/core/testing';

import { ManageActivityService } from './manage-activity.service';

describe('ManageActivityService', () => {
  let service: ManageActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
