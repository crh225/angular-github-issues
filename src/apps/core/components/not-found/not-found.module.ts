import { NgModule, ModuleWithProviders  } from '@angular/core';
import { NotFoundComponent } from './not-found.component';

@NgModule({
 declarations: [ NotFoundComponent ],
 exports:  [ NotFoundComponent ]
})
export class NotFoundModule {
    static forRoot(): ModuleWithProviders {
    return {
      ngModule: NotFoundModule,
      providers: [ ]
    };
  }
}
