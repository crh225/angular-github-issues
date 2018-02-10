import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { SubNavigationComponent } from '@app/github';
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

describe('SubNavigationComponent', () => {
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
  declarations: [SubNavigationComponent],
  providers: [
    Actions,
    UserEffects]
    }).compileComponents();
  }));

  it('should create the user sub navigation component', ((done: any) => {
    const fixture = TestBed.createComponent(SubNavigationComponent);
    const app = fixture.debugElement.componentInstance;
    app.login = '';
    app.user = null;
    fixture.detectChanges();
    expect(app).toBeTruthy();
    done();
  }));

});
