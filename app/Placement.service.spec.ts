import { TestBed } from '@angular/core/testing';

import { PlacementService } from './Placement.service';

describe('PlacementService', () => {
  let service: PlacementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlacementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
