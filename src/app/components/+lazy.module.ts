import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyRoutingModule } from './+lazy.routes';
import { LazyComponent } from './+lazy.component';
import { RepoIssuesComponent, RepoSearchComponent } from './containers';
import { IssueCollectionComponent } from './issue-collection';
import { SearchCollectionComponent } from './search-collection';
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
    MatCardModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [LazyComponent, RepoIssuesComponent, RepoSearchComponent, SearchCollectionComponent, IssueCollectionComponent]
})
export class LazyModule { }