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
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';
import { SharedModule,
  ChartComponent,
  IssueCollectionComponent,
  SearchCollectionComponent,
  UserSearchComponent,
  UserSearchCollectionComponent,
  UserFollowerComponent,
  UserFollowingComponent,
  SubNavigationComponent,
  UserReposComponent,
  UserGistsComponent,
  UserAuthComponent,
  UserAuthSuccessComponent,
  UserAuthGoogleComponent,
  UserAuthGithubComponent,
  UserAuthFacebookComponent} from '@app/github';

@NgModule({
  imports: [
    CommonModule,
    GithubRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    CoreModule,
    NgxGistModule
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
    UserReposComponent,
    UserGistsComponent,
    UserAuthComponent,
    UserAuthSuccessComponent,
    UserAuthGoogleComponent,
    UserAuthGithubComponent,
    UserAuthFacebookComponent
    ],
    providers: [
      UserExistsGuard
    ]
})
export class GithubModule { }
