import * as fromJob from './job.reducer';

export interface AppState {
    job: fromJob.State;
}

export const reducers = {
    issues: fromJob.jobReducer
};
