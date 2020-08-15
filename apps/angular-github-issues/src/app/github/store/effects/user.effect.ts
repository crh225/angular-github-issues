
import { mergeMap, switchMap, map, debounceTime } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as userActions from '../../store/actions';
import { User, Repo, Gist } from '../../shared/models';
import { GithubService } from '../../shared/services';

@Injectable()
export class UserEffects {

    @Effect()
    load$: Observable<{}> = this.actions$.pipe(
        ofType(userActions.LOAD_ALL_USERS),
        debounceTime(1000),
        map((action: userActions.LoadAllUsers) => action.payload),
        switchMap((data) =>
            this._githubService.searchUserByName(data.searchName).pipe(
                mergeMap((user: User[]) => {
                    return [
                        new userActions.LoadAllUsersSuccess(user)
                    ];
                }))
        ));

    @Effect()
    loadFullUser$: Observable<{}> = this.actions$.pipe(
        ofType(userActions.LOAD_FULL_USER),
        debounceTime(0),
        map((action: userActions.LoadFullUser) => action.payload),
        switchMap((data) =>
            this._githubService.returnFullUserObject(data.login).pipe(
                mergeMap((user: User) => {
                    return [
                        new userActions.LoadFullUserSuccess(user)
                    ];
                }))
        ));
    @Effect()
    loadUserRepo$: Observable<{}> = this.actions$.pipe(
        ofType(userActions.LOAD_USER_REPO),
        debounceTime(0),
        map((action: userActions.LoadUserRepo) => action.payload),
        switchMap((data) =>
            this._githubService.returnUserRepoObject(data).pipe(
                mergeMap((repo: Repo[]) => {
                    return [
                        new userActions.LoadUserRepoSuccess(repo)
                    ];
                }))
        ));
    @Effect()
    loadUserGist$: Observable<{}> = this.actions$.pipe(
        ofType(userActions.LOAD_USER_GIST),
        debounceTime(0),
        map((action: userActions.LoadUserGist) => action.payload),
        switchMap((data) =>
            this._githubService.returnUserGistObject(data).pipe(
                mergeMap((gist: Gist[]) => {
                    return [
                        new userActions.LoadUserGistSuccess(gist)
                    ];
                }))
        ));

    @Effect()
    loadFollowers$: Observable<{}> = this.actions$.pipe(
        ofType(userActions.LOAD_ALL_FOLLOWERS),
        debounceTime(100),
        map((action: userActions.LoadAllFollowers) => action.payload),
        switchMap((data) =>
            this._githubService.returnFollowers(data).pipe(
                mergeMap((user: any) => {
                    return [
                        new userActions.LoadAllFollowersSuccess(user)
                    ];
                }))
        ));
    @Effect()
    loadFollowing$: Observable<{}> = this.actions$.pipe(
        ofType(userActions.LOAD_ALL_FOLLOWING),
        debounceTime(100),
        map((action: userActions.LoadAllFollowing) => action.payload),
        switchMap((data) =>
            this._githubService.returnFollowing(data).pipe(
                mergeMap((user: any) => {
                    return [
                        new userActions.LoadAllFollowingSuccess(user)
                    ];
                }))
        ));

    @Effect()
    loadUser$: Observable<{}> = this.actions$.pipe(
        ofType(userActions.SET_CURRENT_USER_ID),
        debounceTime(500),
        map((action: userActions.SetCurrentUserId) => action.payload),
        mergeMap((data) => {
            return [
                new userActions.SetCurrentUserIdSuccess(data),
                new userActions.LoadAllFollowing(data),
                new userActions.LoadAllFollowers(data),
                new userActions.LoadUserRepo(data),
                new userActions.LoadUserGist(data)
            ];
        }));

    constructor(
        private actions$: Actions, private _githubService: GithubService
    ) { }
}
