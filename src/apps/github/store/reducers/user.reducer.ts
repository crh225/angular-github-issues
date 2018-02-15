import { ActionReducer, Action, ActionReducerMap, MetaReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import * as userActions from '@app/github/store/actions/user.action';
import { User, Repo, Gist } from '@app/github/shared/models';


// This adapter will allow is to manipulate contacts (mostly CRUD operations)
export const userAdapter = createEntityAdapter<User>({
    selectId: (user: User) => user.id,
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
export interface State extends EntityState<User> {
    id?: string;
    followers?: User[];
    following?: User[];
    user?: User;
    repo?: Repo[];
    gist?: Gist[];
    apiToken?: string;
}

export const initialState: State = userAdapter.getInitialState({
    id: undefined,
    followers: undefined,
    following: undefined,
    user: undefined,
    repo: undefined,
    gist: undefined,
    apiToken: undefined
});


export const userReducers: ActionReducerMap<any> = {
    users: userReducer
};


export function userReducer(state: State = initialState, action: userActions.UserActions) {

    switch (action.type) {

        case userActions.SET_CURRENT_USER_ID_SUCCESS: {
            return { ...state, id: action.payload };
        }

        case userActions.SET_API_TOKEN: {
            return { ...state, apiToken: action.payload };
        }

        case userActions.LOAD_ALL_USERS_SUCCESS: {
            return { ...state, ...userAdapter.addAll(action.payload as User[], state) };
        }

        case userActions.LOAD_FULL_USER_SUCCESS: {
            return { ...state, user: action.payload };
        }

        case userActions.LOAD_USER_REPO_SUCCESS: {
            return { ...state, repo: action.payload };
        }

        case userActions.LOAD_USER_GIST_SUCCESS: {
            return { ...state, gist: action.payload };
        }

        case userActions.LOAD_ALL_FOLLOWERS_SUCCESS: {
            return { ...state, followers: action.payload };
        }

        case userActions.LOAD_ALL_FOLLOWING_SUCCESS: {
            return { ...state, following: action.payload };
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

export const getCurrentUserId = (state: State) => state.id;

export const getFollowers = (state: State) => state.followers;

export const getFollowing = (state: State) => state.following;

export const getUser = (state: State) => state.user;

export const getUserRepo = (state: State) => state.repo;

export const getUserGist = (state: State) => state.gist;

export const getApiToken = (state: State) => state.apiToken;

export const getSelected = createSelector(getEntities, getCurrentUserId, (entities, selectedId) => {
    return entities[selectedId];
});
