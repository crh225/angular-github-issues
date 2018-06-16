
import { catchError, mergeMap, debounceTime, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import * as repoActions from '@app/github/store/actions';
import { GithubService } from '@app/github/shared/services';

@Injectable()
export class RepoEffects {

    @Effect()
    load$: Observable<Action> = this.actions$
        .ofType(repoActions.LOAD_ALL_REPOS).pipe(
            debounceTime(1000),
            map((action: repoActions.LoadAllRepos) => action.payload),
            switchMap((data) =>
                this._githubService.searchRepoByName(data.searchName).pipe(
                    mergeMap((repos: any) => {
                        return [
                            new repoActions.LoadAllReposSuccess(repos.items)
                        ];
                    }), catchError((error) => {
                        return [
                            new repoActions.LoadRepoFailure({ error: error })
                        ];
                    }), )
            ), );

    constructor(
        private actions$: Actions, private _githubService: GithubService
    ) { }
}
