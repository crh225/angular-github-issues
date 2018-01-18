import { NgModule, ModuleWithProviders  } from '@angular/core';
import { GithubService } from './services';

@NgModule({
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ GithubService ]
    };
  }
}
