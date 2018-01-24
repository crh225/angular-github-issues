import { ActionReducer, Action, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { User } from '@app/github/shared/models';

export const LOAD_ALL_USERS = '[User] LOAD ALL';
export const LOAD_ALL_USERS_SUCCESS = '[User] LOAD ALL SUCCESS';
export const SET_CURRENT_USER_ID = '[User] SET CURRENT USER ID';
export const LOAD_USER_FAILURE = '[User] LOAD FAILURE';

export class LoadAllUsers implements Action {
    readonly type = LOAD_ALL_USERS;
    constructor(public payload: { searchName } ) { }
}

export class LoadAllUsersSuccess implements Action {
    readonly type = LOAD_ALL_USERS_SUCCESS;
    constructor(public payload: User[]) { }
}


export class SetCurrentUserId implements Action {
    readonly type = SET_CURRENT_USER_ID;
    constructor(public payload: number) { }
}

export type UserActions =
    LoadAllUsers
    | LoadAllUsersSuccess
    | SetCurrentUserId;
