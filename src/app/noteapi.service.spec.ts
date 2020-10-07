import { TestBed } from '@angular/core/testing';

import { NoteapiService } from './noteapi.service';

describe('NoteapiService', () => {
  let service: NoteapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
