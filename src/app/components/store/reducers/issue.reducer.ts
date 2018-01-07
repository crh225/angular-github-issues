import { ActionReducer, Action, ActionReducerMap, MetaReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import * as issueActions from '../actions';
import { Issue } from '../../../models';


// This adapter will allow is to manipulate contacts (mostly CRUD operations)
export const issueAdapter = createEntityAdapter<Issue>({
    selectId: (issue: Issue) => issue.id,
    sortComparer: false
});

// -----------------------------------------
// The shape of EntityState
// ------------------------------------------
// interface EntityState<Contact> {
//   ids: string[];
//   entities: { [id: string]: Contact };
// }
// -----------------------------------------
// -> ids arrays allow us to sort data easily
// -> entities map allows us to access the data quickly without iterating/filtering though an array of objects
export interface State extends EntityState<Issue> {
    id?: string;
}

export const initialState: State = issueAdapter.getInitialState({
    id: undefined
});


export const issueReducers: ActionReducerMap<any> = {
    issues: issueReducer
};


export function issueReducer(state: State = initialState, action: issueActions.IssueActions) {

    switch (action.type) {

        case issueActions.LOAD_ALL_ISSUES_SUCCESS: {
            return {...state, ...issueAdapter.addAll(action.payload as Issue[], state) }
        }
        default: {
            return state;
        }

    }
}

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 **/

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

