import { NgModule, ModuleWithProviders  } from '@angular/core';
import { GithubService, TokenInterceptor } from './services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        GithubService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true
        }]
    };
  }
}
