import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RepoIssuesComponent, RepoSearchComponent } from '@app/github';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'github',
    pathMatch: 'full',
  },
  {
    path: 'github',
    loadChildren: '@app/github/+github.module#GithubModule'
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {}
