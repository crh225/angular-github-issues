import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyRoutingModule } from './+lazy.routes';
import { LazyComponent } from './+lazy.component';
import { RepoIssuesComponent, RepoSearchComponent } from './containers';
import { IssueCollectionComponent } from './issue-collection';
import { SearchCollectionComponent } from './search-collection';
import { ChartComponent } from './chart';
import { ChartsModule } from 'ng2-charts';
import { NotFoundComponent } from './not-found';
import { SharedModule } from '@app/components';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  declarations: [LazyComponent,
    RepoIssuesComponent,
    RepoSearchComponent,
    SearchCollectionComponent,
    ChartComponent,
    IssueCollectionComponent,
    NotFoundComponent]
})
export class LazyModule { }
