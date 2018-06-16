import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { UserReposComponent, SubNavigationComponent } from '@app/github';
import { SharedModule } from '@app/github/shared';
import * as forApplication from '@app/github/store/reducers';
import { EffectsModule, Actions } from '@ngrx/effects';
import { UserEffects } from '@app/github/store/effects';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedTestingModule } from '@app/github/shared';
import { CoreModule } from '@core/';
import * as userActions from '@app/github/store/actions';
import * as fromRoot from '@app/github/store/reducers';

describe('UserReposComponent', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
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
  declarations: [UserReposComponent, SubNavigationComponent],
  providers: [
    Actions,
    UserEffects]
    }).compileComponents();
  }));

  it('should create the user repos component', ((done: any) => {
    const fixture = TestBed.createComponent(UserReposComponent);
    const app = fixture.debugElement.componentInstance;
    app.repoCollection = [];
    fixture.detectChanges();
    expect(app).toBeTruthy();
    done();
  }));

  it('should display the user repos', ((done: any) => {
    const fixture = TestBed.createComponent(UserReposComponent);
    const comp = fixture.debugElement.componentInstance;
    comp.repoCollection = [];
    comp.store.dispatch(new userActions.LoadUserRepo('crh225'));
    fixture.detectChanges();

    comp.store.select(fromRoot.getUserRepo).subscribe( data => {
        if (data) {
            comp.repoCollection = data;
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(Object.keys(comp.repoCollection).length).toBeGreaterThan(0);
                done();
            });
        }
    });
  }));
});
