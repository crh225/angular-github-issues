import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobRoutingModule } from './+jobs.routes';
import { JobComponent } from './+jobs.component';
import { CoreModule } from '../core';
import {
  SearchComponent, JobListingComponent
} from '../jobs';
import { StickyFooterComponent } from './components/sticky-footer/sticky-footer.component';
import { AddJobComponent } from './containers/add-job/add-job.component';

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
    SearchComponent,
    StickyFooterComponent,
    AddJobComponent
  ]
})
export class JobModule { }
