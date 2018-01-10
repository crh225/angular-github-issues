import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './+lazy.component';
import { RepoIssuesComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: RepoIssuesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }