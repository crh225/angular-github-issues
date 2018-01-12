import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import * as issueActions from '@app/components/store/actions';
import { Issue } from '@app/components/shared/models';
import { GithubService } from '@app/components/shared/services';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';



@Injectable()
export class IssueEffects {

    @Effect()
    load$: Observable<Action> = this.actions$
        .ofType(issueActions.LOAD_ALL_ISSUES)
        .map((action: issueActions.LoadAllIssues) => action.payload)
        .switchMap((data) =>
            this._githubService.getRepoIssues(data.owner, data.repo, this.subtractDays(7))
                .mergeMap((issues: Issue[]) => {
                    return [
                        new issueActions.LoadAllIssuesSuccess(issues)
                    ];
                })
        );

    constructor(
        private actions$: Actions, private _githubService: GithubService
    ) { }

  subtractDays(totalDays: number): string {
    const days = new Date();
    days.setDate(days.getDate() - totalDays);
    return days.toISOString();
  }
}
