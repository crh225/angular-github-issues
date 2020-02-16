import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserAuthSuccessComponent } from '../..';
import { SharedModule } from '../../../shared';
import * as forApplication from '../../../store/reducers';
import { EffectsModule, Actions } from '@ngrx/effects';
import { UserEffects } from '../../../store/effects';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedTestingModule } from '../../../shared';
import { CoreModule } from '../../../../core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

// todo: put this in a config file
export const firebaseConfig = {
    apiKey: 'AIzaSyB_oLOM5CglXXkH3A1a3oauOUxysPcjmzY',
    authDomain: 'chris-house.firebaseapp.com',
    databaseURL: 'https://chris-house.firebaseio.com',
    projectId: 'chris-house',
    storageBucket: 'chris-house.appspot.com',
    messagingSenderId: '524971702368'
};

describe('UserAuthSuccessComponent', () => {
    beforeEach((() => {
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
            declarations: [UserAuthSuccessComponent],
            providers: [
                Actions,
                UserEffects]
        }).compileComponents();
    }));

    it('should create the user UserAuthSuccessComponent', ((done: any) => {
        const fixture = TestBed.createComponent(UserAuthSuccessComponent);
        const app = fixture.debugElement.componentInstance;
        app.user = null;
        fixture.detectChanges();
        expect(app).toBeTruthy();
        done();
    }));

});
