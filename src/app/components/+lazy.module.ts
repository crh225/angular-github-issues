import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyRoutingModule } from './+lazy.routes';
import { LazyComponent } from './+lazy.component';
import { RepoIssuesComponent, RepoSearchComponent } from './containers';
import { IssueCollectionComponent } from './issue-collection';
import { SearchCollectionComponent } from './search-collection';
import { ChartComponent } from './chart';
import { ChartsModule } from 'ng2-charts';
import { NotFoundComponent } from './not-found';
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
    ReactiveFormsModule,
    ChartsModule
  ],
  declarations: [LazyComponent,
    RepoIssuesComponent,
    RepoSearchComponent,
    SearchCollectionComponent,
    ChartComponent,
    IssueCollectionComponent,
    NotFoundComponent]
})
export class LazyModule { }
