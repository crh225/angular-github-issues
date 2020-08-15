import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedTestingModule, SharedModule } from '../../../shared';
import { RouterTestingModule } from '@angular/router/testing';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    SharedTestingModule.forRoot(),
    SharedModule.forRoot(),
    RouterTestingModule
  ],
  exports: [
    BrowserAnimationsModule,
    SharedTestingModule,
    SharedModule,
    RouterTestingModule
  ]
})
export class AuthTestingModule { }
