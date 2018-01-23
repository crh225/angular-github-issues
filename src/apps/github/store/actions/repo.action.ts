import { ActionReducer, Action, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { Repo } from '@app/github/shared/models';

export const LOAD_ALL_REPOS = '[Repo] LOAD ALL';
export const LOAD_ALL_REPOS_SUCCESS = '[Repo] LOAD ALL SUCCESS';
export const SET_CURRENT_REPO_ID = '[Repo] SET CURRENT REPO ID';
export const LOAD_REPO_FAILURE = '[Repo] LOAD FAILURE';

export class LoadAllRepos implements Action {
    readonly type = LOAD_ALL_REPOS;
    constructor(public payload: { searchName } ) { }
}

export class LoadAllReposSuccess implements Action {
    readonly type = LOAD_ALL_REPOS_SUCCESS;
    constructor(public payload: Repo[]) { }
}


export class SetCurrentRepoId implements Action {
    readonly type = SET_CURRENT_REPO_ID;
    constructor(public payload: number) { }
}

export class LoadRepoFailure implements Action {
    readonly type = LOAD_REPO_FAILURE;
    constructor(public payload: any) { }
}

export type RepoActions =
    LoadAllRepos
    | LoadAllReposSuccess
    | SetCurrentRepoId
    | LoadRepoFailure;
