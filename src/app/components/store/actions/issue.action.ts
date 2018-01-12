import { ActionReducer, Action, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { Issue } from '@app/components/shared/models';

export const ISSUE_FAILURE = '[Issue] FAILURE';
export const LOAD_ALL_ISSUES = '[Issue] LOAD ALL';
export const LOAD_ALL_ISSUES_SUCCESS = '[Issue] LOAD ALL SUCCESS';

export class LoadAllIssues implements Action {
    readonly type = LOAD_ALL_ISSUES;
    constructor(public payload: { owner, repo} ) { }
}

export class LoadAllIssuesSuccess implements Action {
    readonly type = LOAD_ALL_ISSUES_SUCCESS;
    constructor(public payload: Issue[]) { }
}


export class IssueFailure implements Action {
    readonly type = ISSUE_FAILURE;
    constructor(public payload: { error: any }) { }
}

export type IssueActions =
    LoadAllIssues
    | LoadAllIssuesSuccess
    | IssueFailure;
