import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { GithubService } from '../../services';
import { Issue } from '../../models';

@Component({
  selector: 'app-repo-issues',
  templateUrl: './repo-issues.component.html',
  styleUrls: ['./repo-issues.component.css']
})
export class RepoIssuesComponent implements OnInit, OnDestroy {

  public repoIssueCollection: Issue[] = [];
  public error: string;

  private _subscription: any;
  private _owner: string;
  private _repo: string;

  constructor(
    private _githubService: GithubService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._route.params.subscribe(params => {
      //you can pass in other repo's and owners to this component
      this._owner = params.owner;
      this._repo = params.repo;
      this._search();
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  private _search(): void {
    if(!this._owner || !this._repo){
      //default to angular/angular
      this._owner = 'angular';
      this._repo = 'angular';
    }
    
    this._githubService.getRepositoryIssues(this._owner, this._repo, this.getDays())
      .subscribe(
      (data: Issue[]) => {
        if (data.length > 0) {
          this.repoIssueCollection = data;
        } else {
          this.repoIssueCollection = [];
          this.error = 'No issues found.';
        }
      },
      (err: HttpErrorResponse) => {
        this.error = err.statusText;
      }
      );
  }

  getDays(): string {
    let days = new Date();
    days.setDate(days.getDate() - 7);
    return days.toISOString();
  }
}