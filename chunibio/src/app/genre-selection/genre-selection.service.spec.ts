import { TestBed } from '@angular/core/testing';

import { GenreSelectionService } from './genre-selection.service';

describe('GenreSelectionService', () => {
  let service: GenreSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenreSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
