import { RouterModule, Routes } from '@angular/router';

import { RepoIssuesComponent } from './components/repo-issues/repo-issues.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/repo/issues',
    pathMatch: 'full',
  },
  {
    path: 'repo/issues',
    component: RepoIssuesComponent,
  },
  {
    path: 'repo/issues/:owner/:repo',
    component: RepoIssuesComponent,
  },
  { path: '**', redirectTo: 'repo/issues', pathMatch: 'full' },
];

export const AppRoutes = RouterModule.forRoot(routes);