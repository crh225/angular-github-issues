import { ActionReducer, Action, ActionReducerMap, MetaReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import * as repoActions from '../../store/actions/repo.action';
import { Repo } from '../../shared/models';


// This adapter will allow is to manipulate contacts (mostly CRUD operations)
export const repoAdapter = createEntityAdapter<Repo>({
    selectId: (repo: Repo) => repo.id,
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
export interface State extends EntityState<Repo> {
    id?: string;
}

export const initialState: State = repoAdapter.getInitialState({
    id: undefined
});


export const repoReducers: ActionReducerMap<any> = {
    repos: repoReducer
};


export function repoReducer(state: State = initialState, action: repoActions.RepoActions) {

    switch (action.type) {

        case repoActions.SET_CURRENT_REPO_ID: {
            return { ...state, id: action.payload };
        }

        case repoActions.LOAD_ALL_REPOS_SUCCESS: {
            return { ...state, ...repoAdapter.addAll(action.payload as Repo[], state) };
        }

        case repoActions.LOAD_REPO_FAILURE: {
            return { ...state, error: action.payload };
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

export const getCurrentRepoId = (state: State) => state.id;

export const getSelected = createSelector(getEntities, getCurrentRepoId, (entities, selectedId) => {
    return entities[selectedId];
});
