import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GithubRoutingModule } from './+github.routes';
import { GithubComponent } from './+github.component';
import { RepoIssuesComponent, RepoSearchComponent } from '@app/github/containers';
import { ChartsModule } from 'ng2-charts';
import { NotFoundComponent } from './not-found';
import * as core from '@core/shared';
import { SharedModule,
  ChartComponent,
  IssueCollectionComponent,
  SearchCollectionComponent } from '@app/github';

@NgModule({
  imports: [
    CommonModule,
    GithubRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    core.SharedModule
  ],
  declarations: [GithubComponent,
    RepoIssuesComponent,
    RepoSearchComponent,
    SearchCollectionComponent,
    ChartComponent,
    IssueCollectionComponent,
    NotFoundComponent,
    ]
})
export class GithubModule { }
