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

  public returnFollowers(login: string): Observable<Object> {
    const url = this._generateFollowersUrl(login);
    return this._http.get(url);
  }

  public returnFullUserObject(login: string): Observable<Object> {
    const url = this._generateFullUserObjectUrl(login);
    return this._http.get(url);
  }
  public returnUserRepoObject(login: string): Observable<Object> {
    const url = this._generateUserRepoObjectUrl(login);
    return this._http.get(url);
  }
  public returnUserGistObject(login: string): Observable<Object> {
    const url = this._generateUserGistObjectUrl(login);
    console.log(url);
    return this._http.get(url);
  }
  public returnFollowing(login: string): Observable<Object> {
    const url = this._generateFollowingUrl(login);
    return this._http.get(url);
  }

  public getApiToken(code: string) {
    return this._http.get(`https://github.com/login/oauth/access_token?client_id=b78e13b91d0a38ae8316&client_secret=d1bc750e8ef37fc94171a2e9d8482e6b74ecdc71&code=${code}`
    , {
      responseType: 'text'
    });
  }

  private _generateRepoIssuesUrl(owner: string, repo: string, days: string): string {
    return `https://api.github.com/repos/${owner}/${repo}/issues?&per_page=100`;
  }
  private _generateSearchInRepoUrl(name: string): string {
    return `https://api.github.com/search/repositories?q=${name}&per_page=40`;
  }

  private _generateSearchInUserUrl(name: string): string {
    return `https://api.github.com/search/users?q=${name}+location:TN`;
  }
  private _generateFullUserObjectUrl(login: string): string {
    return `https://api.github.com/users/${login}`;
  }
  private _generateUserRepoObjectUrl(login: string): string {
    return `https://api.github.com/users/${login}/repos`;
  }
  private _generateUserGistObjectUrl(login: string): string {
    return `https://api.github.com/users/${login}/gists`;
  }
  private _generateFollowersUrl(login: string): string {
    return `https://api.github.com/users/${login}/followers`;
  }
  private _generateFollowingUrl(login: string): string {
    return `https://api.github.com/users/${login}/following`;
  }


}
