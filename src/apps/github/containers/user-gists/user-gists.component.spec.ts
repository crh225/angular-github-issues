import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { UserGistsComponent, SubNavigationComponent } from '@app/github';
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
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';

describe('UserGistsComponent', () => {
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
        EffectsModule.forRoot([UserEffects]),
        NgxGistModule
      ],
      declarations: [UserGistsComponent, SubNavigationComponent],
      providers: [
        Actions,
        UserEffects]
    }).compileComponents();
  }));

  it('should create the user gists component', ((done: any) => {
    const fixture = TestBed.createComponent(UserGistsComponent);
    const app = fixture.debugElement.componentInstance;
    app.gistCollection = [];
    fixture.detectChanges();
    expect(app).toBeTruthy();
    done();
  }));

  it('should display the user gists', ((done: any) => {
    const fixture = TestBed.createComponent(UserGistsComponent);
    const comp = fixture.debugElement.componentInstance;
    comp.gistCollection = [];
    comp.store.dispatch(new userActions.LoadUserGist('crh225'));
    fixture.detectChanges();

    comp.store.select(fromRoot.getUserGist).subscribe(data => {
      if (data) {
        comp.gistCollection = data;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(Object.keys(comp.gistCollection).length).toBeGreaterThan(0);
          done();
        });
      }
    });
  }));
});
