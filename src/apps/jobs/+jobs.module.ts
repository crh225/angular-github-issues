import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobRoutingModule } from './+jobs.routes';
import { JobComponent } from './+jobs.component';
import { CoreModule } from '../core';
import {
  SearchComponent, JobListingComponent
} from '../jobs';

@NgModule({
  imports: [
    CommonModule,
    JobRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ],
  declarations: [JobComponent,
    JobListingComponent,
    SearchComponent
  ]
})
export class JobModule { }
