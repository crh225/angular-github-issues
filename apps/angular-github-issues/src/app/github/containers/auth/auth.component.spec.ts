import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as forApplication from '../../store/reducers';
import { EffectsModule, Actions } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../../../core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SharedModule, SharedTestingModule } from '../../shared';
import { UserEffects } from '../../store';
import { UserAuthSuccessComponent } from './success';
import { UserAuthComponent } from './auth.component';
import { UserAuthGithubComponent } from './github';
import { UserAuthFacebookComponent } from './facebook';
import { UserAuthGoogleComponent } from './google';
import { environment } from '../../../../environments/environment';
import { AuthTestingModule } from './auth-testing/auth-testing.module';


describe('UserAuthComponent', () => {
    beforeEach((() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
        TestBed.configureTestingModule({
            imports: [
                AuthTestingModule,
                CoreModule.forRoot(),
                StoreModule.forRoot(forApplication.reducers),
                EffectsModule.forRoot([UserEffects]),
                AngularFireModule.initializeApp(environment.firebaseConfig),
                AngularFirestoreModule, // imports firebase/firestore, only needed for database features
                AngularFireAuthModule // imports firebase/auth, only needed for auth features
            ],
            declarations: [UserAuthComponent,
                UserAuthSuccessComponent,
                UserAuthGoogleComponent,
                UserAuthGithubComponent,
                UserAuthFacebookComponent],
            providers: [
                Actions,
                UserEffects]
        }).compileComponents();
    }));

    it('should create the user UserAuthComponent', ((done: any) => {
        const fixture = TestBed.createComponent(UserAuthComponent);
        const app = fixture.debugElement.componentInstance;
        app.user = null;
        fixture.detectChanges();
        expect(app).toBeTruthy();
        done();
    }));
});
