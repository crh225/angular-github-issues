import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import * as github from './github';
import { CoreModule } from './core';
import { StoreModule, USER_PROVIDED_META_REDUCERS, MetaReducer } from '@ngrx/store';
import * as forApplication from './github/store/reducers';
import { EffectsModule, Actions } from '@ngrx/effects';
import { IssueEffects, RepoEffects, UserEffects } from './github/store/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import * as LogRocket from 'logrocket';
import createNgrxMiddleware from 'logrocket-ngrx';

const logrocketMiddleware = createNgrxMiddleware(LogRocket);
export function getMetaReducers(): MetaReducer<any>[] {
  return [logrocketMiddleware];
}

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
    EffectsModule.forRoot([IssueEffects, RepoEffects, UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireDatabaseModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    Actions,
    IssueEffects,
    {
      provide: USER_PROVIDED_META_REDUCERS,
      useFactory: getMetaReducers,
    }]
})
export class AppModule {
}
