import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobComponent } from './+jobs.component';
import { NotFoundComponent } from '../core';
import { SearchComponent } from './containers';
import { AddJobComponent } from './containers/add-job/add-job.component';
import { EditJobComponent } from './containers/edit-job/edit-job.component';

const routes: Routes = [
  {
    path: '',
    component: JobComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'search' },
      { path: 'search', component: SearchComponent },
      { path: 'add', component: AddJobComponent },
      { path: 'edit/:id', component: EditJobComponent }

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
