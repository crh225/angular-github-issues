import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import * as userActions from '@app/github/store/actions';
import { User } from '@app/github/shared/models';
import { GithubService } from '@app/github/shared/services';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';

@Injectable()
export class UserEffects {

    @Effect()
    load$: Observable<Action> = this.actions$
        .ofType(userActions.LOAD_ALL_USERS)
        .debounceTime(1000)
        .map((action: userActions.LoadAllUsers) => action.payload)
        .switchMap((data) =>
        this._githubService.searchUserByName(data.searchName)
                .mergeMap((user: any) => {
                    return [
                        new userActions.LoadAllUsersSuccess( user )
                    ];
                })
        );

    @Effect()
    loadFollowers$: Observable<Action> = this.actions$
        .ofType(userActions.LOAD_ALL_FOLLOWERS)
        .debounceTime(1000)
        .map((action: userActions.LoadAllFollowers) => action.payload)
        .switchMap((data) =>
        this._githubService.returnFollowers(data)
                .mergeMap((user: any) => {
                    return [
                        new userActions.LoadAllFollowersSuccess( user )
                    ];
                })
        );

    constructor(
        private actions$: Actions, private _githubService: GithubService
    ) { }
}
