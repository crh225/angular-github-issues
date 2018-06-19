import * as jobActions from '@app/jobs/store/actions';
import { Jobs } from '@app/jobs/shared/models';


export interface State extends Jobs {
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
