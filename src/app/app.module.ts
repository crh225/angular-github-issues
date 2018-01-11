import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { SharedModule, RepoSearchComponent, SearchCollectionComponent } from './components';

import { StoreModule } from '@ngrx/store';
import * as forApplication from './components/store/reducers'
import { EffectsModule, Actions } from '@ngrx/effects';
import { IssueEffects, RepoEffects } from './components/store/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [AppRoutes,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule.forRoot(),
    StoreModule.forRoot(forApplication.reducers),
    EffectsModule.forRoot([IssueEffects, RepoEffects]),
    StoreDevtoolsModule.instrument({
         maxAge: 25 //  Retains last 25 states
    })
  ],
  declarations: [AppComponent, RepoSearchComponent, SearchCollectionComponent],
  bootstrap: [AppComponent],
  providers: [
      Actions,
      IssueEffects]
})
export class AppModule { }
