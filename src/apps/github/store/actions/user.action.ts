import {  Action } from '@ngrx/store';
import { User, Repo, Gist } from '@app/github/shared/models';

export const LOAD_ALL_USERS = '[User] LOAD ALL';
export const LOAD_ALL_USERS_SUCCESS = '[User] LOAD ALL SUCCESS';
export const LOAD_FULL_USER = '[User] LOAD FULL USER';
export const LOAD_FULL_USER_SUCCESS = '[User] LOAD FULL USER SUCCESS';
export const LOAD_USER_REPO = '[User] LOAD USER REPO';
export const LOAD_USER_REPO_SUCCESS = '[User] LOAD USER REPO SUCCESS';
export const LOAD_USER_GIST = '[User] LOAD USER GIST';
export const LOAD_USER_GIST_SUCCESS = '[User] LOAD USER GIST SUCCESS';
export const SET_CURRENT_USER_ID = '[User] SET CURRENT USER ID';
export const SET_CURRENT_USER_ID_SUCCESS = '[User] SET CURRENT USER ID SUCCESS';
export const SET_API_TOKEN = '[User] SET API TOKEN';
export const LOAD_ALL_FOLLOWERS = '[User] Load All Followers';
export const LOAD_ALL_FOLLOWERS_SUCCESS = '[User] Load All Followers Success';
export const LOAD_ALL_FOLLOWING = '[User] Load All Following';
export const LOAD_ALL_FOLLOWING_SUCCESS = '[User] Load All Following Success';
export const LOAD_USER_FAILURE = '[User] LOAD FAILURE';

export class LoadAllUsers implements Action {
    readonly type = LOAD_ALL_USERS;
    constructor(public payload: { searchName } ) { }
}

export class LoadAllUsersSuccess implements Action {
    readonly type = LOAD_ALL_USERS_SUCCESS;
    constructor(public payload: User[]) { }
}

export class LoadFullUser implements Action {
    readonly type = LOAD_FULL_USER;
    constructor(public payload: { login } ) { }
}

export class LoadFullUserSuccess implements Action {
    readonly type = LOAD_FULL_USER_SUCCESS;
    constructor(public payload: User) { }
}


export class LoadUserRepo implements Action {
    readonly type = LOAD_USER_REPO;
    constructor(public payload: string ) { }
}

export class LoadUserRepoSuccess implements Action {
    readonly type = LOAD_USER_REPO_SUCCESS;
    constructor(public payload: Repo[]) { }
}

export class LoadUserGist implements Action {
    readonly type = LOAD_USER_GIST;
    constructor(public payload: string ) { }
}

export class LoadUserGistSuccess implements Action {
    readonly type = LOAD_USER_GIST_SUCCESS;
    constructor(public payload: Gist[]) { }
}

export class LoadAllFollowers implements Action {
    readonly type = LOAD_ALL_FOLLOWERS;
    constructor(public payload: string ) { }
}

export class LoadAllFollowersSuccess implements Action {
    readonly type = LOAD_ALL_FOLLOWERS_SUCCESS;
    constructor(public payload: User[]) { }
}
export class LoadAllFollowing implements Action {
    readonly type = LOAD_ALL_FOLLOWING;
    constructor(public payload: string ) { }
}

export class LoadAllFollowingSuccess implements Action {
    readonly type = LOAD_ALL_FOLLOWING_SUCCESS;
    constructor(public payload: User[]) { }
}

export class SetCurrentUserId implements Action {
    readonly type = SET_CURRENT_USER_ID;
    constructor(public payload: any) { }
}

export class SetCurrentUserIdSuccess implements Action {
    readonly type = SET_CURRENT_USER_ID_SUCCESS;
    constructor(public payload: number) { }
}

export class SetApiToken implements Action {
    readonly type = SET_API_TOKEN;
    constructor(public payload: string) { }
}

export type UserActions =
    LoadAllUsers
    | LoadAllUsersSuccess
    | SetCurrentUserId
    | LoadAllFollowers
    | LoadAllFollowersSuccess
    | LoadAllFollowing
    | LoadAllFollowingSuccess
    | SetCurrentUserIdSuccess
    | LoadFullUser
    | LoadFullUserSuccess
    | LoadUserRepo
    | LoadUserRepoSuccess
    | LoadUserGist
    | LoadUserGistSuccess
    | SetApiToken;
