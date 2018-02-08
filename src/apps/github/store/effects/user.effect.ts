import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import * as userActions from '@app/github/store/actions';
import { User, Repo } from '@app/github/shared/models';
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
                .mergeMap((user: User[]) => {
                    return [
                        new userActions.LoadAllUsersSuccess(user)
                    ];
                })
        );

    @Effect()
    loadFullUser$: Observable<Action> = this.actions$
        .ofType(userActions.LOAD_FULL_USER)
        .debounceTime(0)
        .map((action: userActions.LoadFullUser) => action.payload)
        .switchMap((data) =>
            this._githubService.returnFullUserObject(data.login)
                .mergeMap((user: User) => {
                    return [
                        new userActions.LoadFullUserSuccess(user)
                    ];
                })
        );
    @Effect()
    loadUserRepo$: Observable<Action> = this.actions$
        .ofType(userActions.LOAD_USER_REPO)
        .debounceTime(0)
        .map((action: userActions.LoadUserRepo) => action.payload)
        .switchMap((data) =>
            this._githubService.returnUserRepoObject(data)
                .mergeMap((repo: Repo[]) => {
                    console.log(repo);
                    return [
                        new userActions.LoadUserRepoSuccess(repo)
                    ];
                })
        );

    @Effect()
    loadFollowers$: Observable<Action> = this.actions$
        .ofType(userActions.LOAD_ALL_FOLLOWERS)
        .debounceTime(100)
        .map((action: userActions.LoadAllFollowers) => action.payload)
        .switchMap((data) =>
            this._githubService.returnFollowers(data)
                .mergeMap((user: any) => {
                    return [
                        new userActions.LoadAllFollowersSuccess(user)
                    ];
                })
        );
    @Effect()
    loadFollowing$: Observable<Action> = this.actions$
        .ofType(userActions.LOAD_ALL_FOLLOWING)
        .debounceTime(100)
        .map((action: userActions.LoadAllFollowing) => action.payload)
        .switchMap((data) =>
            this._githubService.returnFollowing(data)
                .mergeMap((user: any) => {
                    return [
                        new userActions.LoadAllFollowingSuccess(user)
                    ];
                })
        );

    @Effect()
    loadUser$: Observable<Action> = this.actions$
        .ofType(userActions.SET_CURRENT_USER_ID)
        .debounceTime(500)
        .map((action: userActions.SetCurrentUserId) => action.payload)
        .mergeMap((data) => {
            return [
                new userActions.SetCurrentUserIdSuccess(data),
                new userActions.LoadAllFollowing(data),
                new userActions.LoadAllFollowers(data),
                new userActions.LoadUserRepo(data)
            ];
        });

    constructor(
        private actions$: Actions, private _githubService: GithubService
    ) { }
}
