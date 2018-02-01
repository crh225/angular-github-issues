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

  public searchUserByName(name: string): Observable<Object> {
    const url = this._generateSearchInUserUrl(name);
    return this._http.get(url);
  }

  public returnFollowers(searchString: string): Observable<Object> {
    return this._http.get(searchString);
  }
  public returnFollowing(login: string): Observable<Object> {
    const url = this._generateFollowingUrl(login);
    console.log(url);
    return this._http.get(url);
  }

  private _generateRepoIssuesUrl(owner: string, repo: string, days: string): string {
    return `https://api.github.com/repos/${owner}/${repo}/issues?&per_page=100`;
  }
  private _generateSearchInRepoUrl(name: string): string {
    return `https://api.github.com/search/repositories?q=${name}&per_page=40`;
  }

  private _generateSearchInUserUrl(name: string): string {
    return `https://api.github.com/search/users?q=${name}+language:angular+&sort=stars`;
  }

  private _generateFollowingUrl(login: string): string {
    return `https://api.github.com/users/${login}/following`;
  }


}
