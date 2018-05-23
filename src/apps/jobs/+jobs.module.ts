import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobRoutingModule } from './+jobs.routes';
import { JobComponent } from './+jobs.component';
import { CoreModule } from '@core/';
import {
  SearchComponent
} from '@app/jobs';

@NgModule({
  imports: [
    CommonModule,
    JobRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ],
  declarations: [JobComponent,
    SearchComponent
  ]
})
export class JobModule { }
