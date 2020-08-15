
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as issueActions from '../../store/actions';
import { Issue } from '../../shared/models';
import { GithubService } from '../../shared/services';


@Injectable()
export class IssueEffects {

    @Effect()
    load$: Observable<{}> = this.actions$
        .pipe(
            ofType(issueActions.LOAD_ALL_ISSUES),
            map((action: issueActions.LoadAllIssues) => action.payload),
            switchMap((data) =>
                this._githubService.getRepoIssues(data.owner, data.repo, this.subtractDays(7)).pipe(
                    mergeMap((issues: Issue[]) => {
                        return [
                            new issueActions.LoadAllIssuesSuccess(issues)
                        ];
                    }))
            ));

    constructor(
        private actions$: Actions, private _githubService: GithubService
    ) { }

    subtractDays(totalDays: number): string {
        const days = new Date();
        days.setDate(days.getDate() - totalDays);
        return days.toISOString();
    }
}
