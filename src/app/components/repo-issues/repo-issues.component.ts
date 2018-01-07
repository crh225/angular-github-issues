import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ActionsSubject, Store } from '@ngrx/store';
import * as issueActions from '../store/actions';
import * as fromRoot from '../store/reducers';
import { GithubService } from '../../services';
import { Issue } from '../../models';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'app-repo-issues',
    templateUrl: './repo-issues.component.html',
    styleUrls: ['./repo-issues.component.css']
})
export class RepoIssuesComponent implements OnInit, OnDestroy {

    public repoIssueCollection: Issue[] = [];

    private _subscription: any;
    private _storeSubject: ActionsSubject;
    private _owner: string;
    private _repo: string;

    constructor(
        private _githubService: GithubService,
        private _route: ActivatedRoute,
        private store: Store<fromRoot.AppState>,
        private actionsSubject: ActionsSubject) {

        this.actionsSubject
            .asObservable()
            .filter(action => action.type === issueActions.LOAD_ALL_ISSUES_SUCCESS)
            .subscribe((data: any) => {
                switch (data.type) {
                    case '[Issue] LOAD ALL SUCCESS':
                        this.repoIssueCollection = data.payload;
                        break;
                    default: console.log(data);
                }
            });

    }

    ngOnInit() {
        this._subscription = this._route.params.subscribe(params => {
            //you can pass in other repo's and owners to this component via url
            this._owner = params.owner;
            this._repo = params.repo;
            this._search();
        });
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

    private _search(): void {
        if (!this._owner || !this._repo) {
            //default to angular/angular
            this._owner = 'angular';
            this._repo = 'angular';
        }

        this.store.dispatch(new issueActions.LoadAllIssues({ owner: this._owner, repo: this._repo }));
    }

}