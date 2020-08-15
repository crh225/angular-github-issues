
import { catchError, mergeMap, debounceTime, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as repoActions from '../../store/actions';
import { GithubService } from '../../shared/services';

@Injectable()
export class RepoEffects {

    @Effect()
    load$: Observable<{}> = this.actions$.pipe(
        ofType(repoActions.LOAD_ALL_REPOS),
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
                }))
        ));

    constructor(
        private actions$: Actions, private _githubService: GithubService
    ) { }
}
