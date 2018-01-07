import { combineReducers, ActionReducer } from '@ngrx/store';
import * as fromIssue from './issue.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';


export interface AppState {
    issue: fromIssue.State;
}

export const reducers = {
    issues: fromIssue.issueReducer
};


export const getIssueState = (state: AppState) => state.issue;

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function from the reselect library creates
 * very efficient selectors that are memoized and only recompute when arguments change.
 * The created selectors can also be composed together to select different
 * pieces of state.
 */
export const getIssueEntities = createSelector(getIssueState, fromIssue.getEntities);
export const getPlanIds = createSelector(getIssueState, fromIssue.getIds);


