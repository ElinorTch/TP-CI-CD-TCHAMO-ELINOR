import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { PaysService } from './pays.service';

describe('PaysService', () => {
  let service: PaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
