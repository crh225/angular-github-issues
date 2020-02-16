import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../../shared';
import * as forApplication from '../../../store/reducers';
import { EffectsModule, Actions } from '@ngrx/effects';
import { UserEffects } from '../../../store/effects';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedTestingModule } from '../../../shared';
import { CoreModule } from '../../../../core';
import { UserAuthGoogleComponent } from './auth-google.componnet';
import { AuthTestingModule } from '../auth-testing/auth-testing.module';

describe('UserAuthGoogleComponent', () => {
    beforeEach((() => {
        TestBed.configureTestingModule({
            imports: [
                AuthTestingModule,
                CoreModule.forRoot(),
                StoreModule.forRoot(forApplication.reducers),
                EffectsModule.forRoot([UserEffects])
            ],
            declarations: [UserAuthGoogleComponent],
            providers: [
                Actions,
                UserEffects]
        }).compileComponents();
    }));

    it('should create the user UserAuthGoogleComponent', ((done: any) => {
        const fixture = TestBed.createComponent(UserAuthGoogleComponent);
        const app = fixture.debugElement.componentInstance;
        app.imageUrl = '';
        app.user = null;
        app.provider = null;
        fixture.detectChanges();
        expect(app).toBeTruthy();
        done();
    }));

});
