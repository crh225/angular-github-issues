import { NgModule, ModuleWithProviders  } from '@angular/core';
import { SpinnerComponent } from './spinner.component';

@NgModule({
 declarations: [ SpinnerComponent ],
 exports:  [ SpinnerComponent ]
})
export class SpinnerModule {
    static forRoot(): ModuleWithProviders {
    return {
      ngModule: SpinnerModule,
      providers: [ ]
    };
  }
}
