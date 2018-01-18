import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GithubService } from './github.service';
import { HttpClientModule } from '@angular/common/http';

describe('GithubService', () => {
  let injector: TestBed;
  let service: GithubService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService]
    });
    injector = getTestBed();
    service = injector.get(GithubService);
    httpMock = injector.get(HttpTestingController);
  });

  describe('get repos', () => {
    it('should return an Observable<Repo[]>', () => {
      const repo = 'angular';
      service.searchRepoByName(repo).subscribe(data => {
        expect(Object.keys(data).length).toBe(40);
      });
    });
  });

  describe('get repo issues', () => {
    it('should return an Observable<Issue[]>', () => {
      const owner = 'angular';
      const repo = 'angular';
      const days = '7';
      service.getRepoIssues(owner, repo, days).subscribe(data => {
        expect(Object.keys(data).length).toBe(100);
        expect(Object.keys(data).length).toBeGreaterThan(0);
      });
    });
  });
});
