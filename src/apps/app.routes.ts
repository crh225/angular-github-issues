import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'github',
    pathMatch: 'full',
  },
  {
    path: 'github',
    loadChildren: () => import('@app/github/+github.module').then(m => m.GithubModule)
  },
  {
    path: 'jobs',
    loadChildren: () => import('@app/jobs/+jobs.module').then(m => m.JobModule)
  },
  { path: '**', redirectTo: 'NotFoundComponent' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {}
