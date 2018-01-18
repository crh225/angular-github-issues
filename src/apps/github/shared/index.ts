
import * as forApplication from '@app/github/store/reducers';
import { EffectsModule, Actions } from '@ngrx/effects';
import { IssueEffects, RepoEffects } from '@app/github/store/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './shared.module';
import { SharedTestingModule } from './shared.testing.module';

export * from './shared.module';
export * from './services';
export * from './models';
export * from './shared.testing.module';

export const SharedTestingModuleWithProviders = [
    SharedTestingModule.forRoot(),
    SharedModule.forRoot(),
    StoreModule.forRoot(forApplication.reducers),
    EffectsModule.forRoot([IssueEffects, RepoEffects])
];
