import { TestBed } from '@angular/core/testing';

import { ShareLinksService } from './share-links.service';

describe('ShareLinksService', () => {
  let service: ShareLinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareLinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
