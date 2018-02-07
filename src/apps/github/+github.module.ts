import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GithubRoutingModule } from './+github.routes';
import { GithubComponent } from './+github.component';
import { RepoIssuesComponent, RepoSearchComponent } from '@app/github/containers';
import { UserExistsGuard } from './guards';
import { ChartsModule } from 'ng2-charts';
import { NotFoundComponent } from '@core/components/not-found';
import { CoreModule } from '@core/';
import { SharedModule,
  ChartComponent,
  IssueCollectionComponent,
  SearchCollectionComponent,
  UserSearchComponent,
  UserSearchCollectionComponent,
  UserFollowerComponent,
  UserFollowingComponent,
  SubNavigationComponent,
  UserReposComponent } from '@app/github';

@NgModule({
  imports: [
    CommonModule,
    GithubRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    CoreModule
  ],
  declarations: [GithubComponent,
    RepoIssuesComponent,
    RepoSearchComponent,
    SearchCollectionComponent,
    ChartComponent,
    IssueCollectionComponent,
    UserSearchComponent,
    UserSearchCollectionComponent,
    UserFollowerComponent,
    UserFollowingComponent,
    SubNavigationComponent,
    UserReposComponent
    ],
    providers: [
      UserExistsGuard
    ]
})
export class GithubModule { }
