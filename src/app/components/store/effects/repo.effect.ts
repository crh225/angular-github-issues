import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import * as repoActions from '@app/components/store/actions';
import { Repo } from '@app/components/shared/models';
import { GithubService } from '@app/components/shared/services';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class RepoEffects {

    @Effect()
    load$: Observable<Action> = this.actions$
        .ofType(repoActions.LOAD_ALL_REPOS)
        .map((action: repoActions.LoadAllRepos) => action.payload)
        .switchMap((data) =>
        this._githubService.searchRepoByName(data.searchName)
                .mergeMap((repos: any) => {
                    return [
                        new repoActions.LoadAllReposSuccess( repos.items )
                    ];
                })
        );

    constructor(
        private actions$: Actions, private _githubService: GithubService
    ) { }
}
