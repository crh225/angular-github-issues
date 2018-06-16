import { TestBed} from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@app/github/shared';
import * as forApplication from '@app/github/store/reducers';
import { EffectsModule, Actions } from '@ngrx/effects';
import { UserEffects } from '@app/github/store/effects';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedTestingModule } from '@app/github/shared';
import { CoreModule } from '@core/';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {
    UserAuthComponent,
    UserAuthSuccessComponent,
    UserAuthGoogleComponent,
    UserAuthGithubComponent,
    UserAuthFacebookComponent
} from '@app/github';
// todo: put this in a config file
export const firebaseConfig = {
    apiKey: 'AIzaSyB_oLOM5CglXXkH3A1a3oauOUxysPcjmzY',
    authDomain: 'chris-house.firebaseapp.com',
    databaseURL: 'https://chris-house.firebaseio.com',
    projectId: 'chris-house',
    storageBucket: 'chris-house.appspot.com',
    messagingSenderId: '524971702368'
};

describe('UserAuthComponent', () => {
    beforeEach((() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                SharedTestingModule.forRoot(),
                SharedModule.forRoot(),
                RouterTestingModule,
                CoreModule.forRoot(),
                StoreModule.forRoot(forApplication.reducers),
                EffectsModule.forRoot([UserEffects]),
                AngularFireModule.initializeApp(firebaseConfig),
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
