import * as userActions from '@app/github/store/actions/user.action';
import { User, Repo, Gist } from '@app/github/shared/models';

export interface State {
    id?: string;
    followers?: User[];
    following?: User[];
    user?: User;
    repo?: Repo[];
    gist?: Gist[];
    apiToken?: string;
    searchUserCollection?: User[];
}

export const initialState: State = {
    id: null,
    followers: null,
    following: null,
    user: null,
    repo: null,
    gist: null,
    apiToken: null,
    searchUserCollection: null
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
            return { ...state, searchUserCollection: action.payload };
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

export const getCurrentUserId = (state: State) => state.id;

export const getFollowers = (state: State) => state.followers;

export const getFollowing = (state: State) => state.following;

export const getUser = (state: State) => state.user;

export const getUserRepo = (state: State) => state.repo;

export const getUserGist = (state: State) => state.gist;

export const getApiToken = (state: State) => state.apiToken;

export const getSearchUserCollection = (state: State) => state.searchUserCollection;
