import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import * as forApplication from '../../../store/reducers';
import { EffectsModule, Actions } from '@ngrx/effects';

import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

import { CoreModule } from '../../../../core';
import { SharedTestingModule, SharedModule } from '../../../shared';
import { UserEffects } from '../../../store';
import { UserAuthFacebookComponent } from './auth-facebook.componnet';

describe('UserAuthFacebookComponent', () => {
    beforeEach((() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                SharedTestingModule.forRoot(),
                SharedModule.forRoot(),
                RouterTestingModule,
                CoreModule.forRoot(),
                StoreModule.forRoot(forApplication.reducers),
                EffectsModule.forRoot([UserEffects])
            ],
            declarations: [UserAuthFacebookComponent],
            providers: [
                Actions,
                UserEffects]
        }).compileComponents();
    }));

    it('should create the user UserAuthFacebookComponent', ((done: any) => {
        const fixture = TestBed.createComponent(UserAuthFacebookComponent);
        const app = fixture.debugElement.componentInstance;
        app.imageUrl = '';
        app.user = null;
        app.provider = null;
        fixture.detectChanges();
        expect(app).toBeTruthy();
        done();
    }));

});
