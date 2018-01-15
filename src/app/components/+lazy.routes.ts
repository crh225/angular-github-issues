import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './+lazy.component';
import { RepoSearchComponent, RepoIssuesComponent } from './containers';
import { NotFoundComponent } from './not-found';

const routes: Routes = [
  {
    path: '',
    component: LazyComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'search' },
      { path: 'search', component: RepoSearchComponent },
      { path: 'issues', component: RepoIssuesComponent }
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
export class LazyRoutingModule { }
