import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobComponent } from './+jobs.component';
import { NotFoundComponent } from '@core/components/not-found';
import {
  SearchComponent
} from '@app/jobs';

const routes: Routes = [
  {
    path: '',
    component: JobComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'search' },
      { path: 'search', component: SearchComponent },
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
export class JobRoutingModule { }
