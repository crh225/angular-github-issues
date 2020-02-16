import { Action } from '@ngrx/store';
import { Jobs } from '../../shared/models';

export const LOAD_ALL_JOBS = '[Jobs] LOAD ALL';
export const LOAD_ALL_JOBS_SUCCESS = '[Jobs] LOAD ALL SUCCESS';

export class LoadAllJobs implements Action {
    readonly type = LOAD_ALL_JOBS;
    constructor(public payload: Jobs[]) { }
}

export type JobActions =
    LoadAllJobs;
