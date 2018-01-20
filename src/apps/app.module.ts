import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import * as github from '@app/github';
import { CoreModule } from '@core/';
import { StoreModule } from '@ngrx/store';
import * as forApplication from '@app/github/store/reducers';
import { EffectsModule, Actions } from '@ngrx/effects';
import { IssueEffects, RepoEffects } from '@app/github/store/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [AppRoutes,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    github.SharedModule.forRoot(),
    CoreModule.forRoot(),
    StoreModule.forRoot(forApplication.reducers),
    EffectsModule.forRoot([IssueEffects, RepoEffects]),
    StoreDevtoolsModule.instrument({
         maxAge: 25 //  Retains last 25 states
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
      Actions,
      IssueEffects]
})
export class AppModule { }
