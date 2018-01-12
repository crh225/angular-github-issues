import { combineReducers, ActionReducer } from '@ngrx/store';
import * as fromIssue from './issue.reducer';
import * as fromRepo from './repo.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';


export interface AppState {
    issue: fromIssue.State;
    repo: fromRepo.State;
}

export const reducers = {
    issues: fromIssue.issueReducer,
    repo: fromRepo.repoReducer
};


export const getIssueState = (state: AppState) => state.issue;
export const getRepoState = (state: AppState) => state.repo;

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
export const getIssueIds = createSelector(getIssueState, fromIssue.getIds);
export const getRepoEntities = createSelector(getRepoState, fromRepo.getEntities);
export const getRepoIds = createSelector(getRepoState, fromRepo.getIds);
export const getSelectedRepoId = createSelector(getRepoState, fromRepo.getCurrentRepoId);
export const getSelectedRepo = createSelector(getRepoState, fromRepo.getSelected);
