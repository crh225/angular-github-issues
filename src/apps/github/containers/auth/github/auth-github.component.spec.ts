import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserAuthGithubComponent } from '@app/github';
import { SharedModule } from '@app/github/shared';
import * as forApplication from '@app/github/store/reducers';
import { EffectsModule, Actions } from '@ngrx/effects';
import { UserEffects } from '@app/github/store/effects';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedTestingModule } from '@app/github/shared';
import { CoreModule } from '@core/';

describe('UserAuthGithubComponent', () => {
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
            declarations: [UserAuthGithubComponent],
            providers: [
                Actions,
                UserEffects]
        }).compileComponents();
    }));

    it('should create the user UserAuthGithubComponent', ((done: any) => {
        const fixture = TestBed.createComponent(UserAuthGithubComponent);
        const app = fixture.debugElement.componentInstance;
        app.imageUrl = '';
        app.user = null;
        app.provider = null;
        fixture.detectChanges();
        expect(app).toBeTruthy();
        done();
    }));

});
