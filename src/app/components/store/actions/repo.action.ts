import { ActionReducer, Action, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { Repo } from '@app/components/shared/models';

export const REPO_FAILURE = '[Repo] FAILURE';
export const LOAD_ALL_REPOS = '[Repo] LOAD ALL';
export const LOAD_ALL_REPOS_SUCCESS = '[Repo] LOAD ALL SUCCESS';
export const SET_CURRENT_REPO_ID = '[Repo] SET CURRENT REPO ID';

export class LoadAllRepos implements Action {
    readonly type = LOAD_ALL_REPOS;
    constructor(public payload: { searchName } ) { }
}

export class LoadAllReposSuccess implements Action {
    readonly type = LOAD_ALL_REPOS_SUCCESS;
    constructor(public payload: Repo[]) { }
}


export class RepoFailure implements Action {
    readonly type = REPO_FAILURE;
    constructor(public payload: { error: any }) { }
}

export class SetCurrentRepoId implements Action {
    readonly type = SET_CURRENT_REPO_ID;
    constructor(public payload: number) { }
}

export type RepoActions =
    LoadAllRepos
    | LoadAllReposSuccess
    | RepoFailure
    | SetCurrentRepoId;