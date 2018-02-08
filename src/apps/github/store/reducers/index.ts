import { combineReducers, ActionReducer } from '@ngrx/store';
import * as fromIssue from './issue.reducer';
import * as fromRepo from './repo.reducer';
import * as fromUser from './user.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';


export interface AppState {
    issue: fromIssue.State;
    repo: fromRepo.State;
    user: fromUser.State;
}

export const reducers = {
    issues: fromIssue.issueReducer,
    repo: fromRepo.repoReducer,
    user: fromUser.userReducer
};


export const getRepoState = (state: AppState) => state.repo;
export const getUserState = (state: AppState) => state.user;

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
/* Repo Entities */
export const getRepoEntities = createSelector(getRepoState, fromRepo.getEntities);
export const getSelectedRepoId = createSelector(getRepoState, fromRepo.getCurrentRepoId);
export const getSelectedRepo = createSelector(getRepoState, fromRepo.getSelected);

/* User Entities */
export const getUserEntities = createSelector(getUserState, fromUser.getEntities);
export const getSelectedUserId = createSelector(getUserState, fromUser.getCurrentUserId);
export const getUser = createSelector(getUserState, fromUser.getUser);
export const getUserRepo = createSelector(getUserState, fromUser.getUserRepo);
export const getFollowers = createSelector(getUserState, fromUser.getFollowers);
export const getFollowing = createSelector(getUserState, fromUser.getFollowing);
export const getSelectedUser = createSelector(getUserState, fromUser.getSelected);
