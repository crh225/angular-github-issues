import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './+lazy.routes';
import { LazyComponent } from './+lazy.component';
import { RepoIssuesComponent } from './containers';
import { IssueCollectionComponent } from './issue-collection';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule,
    MatCardModule
  ],
  declarations: [LazyComponent, RepoIssuesComponent, IssueCollectionComponent]
})
export class LazyModule { }