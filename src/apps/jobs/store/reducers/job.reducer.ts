import * as jobActions from '../../store/actions';
import { Jobs } from '../../shared/models';


export interface State {
    company?: string;
    description?: string;
    title?: string;
}

export const initialState: State = {
    company: null,
    description: null,
    title: null
};

export function jobReducer(state: State = initialState, action: jobActions.JobActions) {

    switch (action.type) {

        case jobActions.LOAD_ALL_JOBS: {
            return { ...state, id: action.payload };
        }

        default: {
            return state;
        }

    }
}
