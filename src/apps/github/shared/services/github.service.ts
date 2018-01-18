import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubService {
  constructor(private _http: HttpClient) { }

  public getRepoIssues(owner: string, repo: string, days: string): Observable<Object> {
    const url: string = this._generateRepoIssuesUrl(owner, repo, days);
    return this._http.get(url);
  }

  public searchRepoByName(name: string): Observable<Object> {
    const url = this._generateSearchInRepoUrl(name);
    return this._http.get(url);
  }

  private _generateRepoIssuesUrl(owner: string, repo: string, days: string): string {
    return `https://api.github.com/repos/${owner}/${repo}/issues?&since=${days}?&per_page=100`;
  }
  private _generateSearchInRepoUrl(name: string): string {
    return `https://api.github.com/search/repositories?q=${name}&per_page=40`;
  }

}
