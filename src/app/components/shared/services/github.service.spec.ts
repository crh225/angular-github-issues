import { TestBed, inject } from '@angular/core/testing';

import { GithubService } from './github.service';
import { HttpClientModule } from '@angular/common/http';

describe('GithubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [GithubService]
    });
  });

  it('should be created', inject([GithubService], (service: GithubService) => {
    expect(service).toBeTruthy();
  }));
});