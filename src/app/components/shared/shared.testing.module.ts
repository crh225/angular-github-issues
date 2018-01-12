import { NgModule, ModuleWithProviders  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule
  ]
})
export class SharedTestingModule {
    static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedTestingModule,
      providers: [ ]
    };
  }
}
