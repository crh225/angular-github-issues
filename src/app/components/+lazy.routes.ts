import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './+lazy.component';
import { RepoSearchComponent, RepoIssuesComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: LazyComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'search' },
      { path: 'search', component: RepoSearchComponent },
      { path: 'issues', component: RepoIssuesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
