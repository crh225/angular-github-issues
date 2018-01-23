import { NgModule, ModuleWithProviders  } from '@angular/core';
import { NotFoundModule, SpinnerModule } from '@core/components';
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
  MatToolbarModule,
  MatSnackBarModule
} from '@angular/material';

const ModulesArray = [
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
  MatToolbarModule,
  SpinnerModule,
  NotFoundModule,
  MatSnackBarModule
];

@NgModule({
  imports: [
    ModulesArray
  ],
  exports: [
    ModulesArray
  ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [ ]
    };
  }
}
