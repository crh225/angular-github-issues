import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RepoIssuesComponent, RepoSearchComponent } from './components';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lazy',
    pathMatch: 'full',
  },
  {
    path: 'repo/search',
    component: RepoSearchComponent
  },
  {
    path: 'lazy',
    loadChildren: './components/+lazy.module#LazyModule'
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {};