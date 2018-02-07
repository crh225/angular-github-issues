import { ActionReducer, Action, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { User } from '@app/github/shared/models';

export const LOAD_ALL_USERS = '[User] LOAD ALL';
export const LOAD_ALL_USERS_SUCCESS = '[User] LOAD ALL SUCCESS';
export const LOAD_FULL_USER = '[User] LOAD FULL USER';
export const LOAD_FULL_USER_SUCCESS = '[User] LOAD FULL USER SUCCESS';
export const SET_CURRENT_USER_ID = '[User] SET CURRENT USER ID';
export const SET_CURRENT_USER_ID_SUCCESS = '[User] SET CURRENT USER ID SUCCESS';
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
    | LoadFullUserSuccess;
