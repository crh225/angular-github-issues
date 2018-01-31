import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubComponent } from './+github.component';
import { RepoSearchComponent, RepoIssuesComponent, UserSearchComponent, UserFollowerComponent } from './containers';
import { NotFoundComponent } from '@core/components/not-found';

const routes: Routes = [
  {
    path: '',
    component: GithubComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'search' },
      { path: 'search', component: RepoSearchComponent },
      { path: 'issues', component: RepoIssuesComponent },
      { path: 'user', component: UserSearchComponent },
      { path: 'followers', component: UserFollowerComponent}
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubRoutingModule { }
