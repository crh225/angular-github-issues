import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubService {
  constructor(private _http: HttpClient) { }
  
  public getRepositoryIssues(owner: string, repo: string, days: string): Observable<Object> {
    const url: string = this._generateRepositoryIssuesUrl(owner, repo, days);
    return this._http.get(url);
  }
  private _generateRepositoryIssuesUrl(owner: string, repo: string, days: string): string {
    return `https://api.github.com/repos/${owner}/${repo}/issues?&since=${days}`;
  }

}