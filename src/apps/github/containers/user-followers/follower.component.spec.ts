import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { UserFollowerComponent, UserSearchCollectionComponent } from '@app/github';
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

describe('UserFollowerComponent', () => {
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
  declarations: [UserSearchCollectionComponent, UserFollowerComponent],
  providers: [
    Actions,
    UserEffects]
    }).compileComponents();
  }));

  it('should create the user follower component', async(() => {
    const fixture = TestBed.createComponent(UserFollowerComponent);
    const app = fixture.debugElement.componentInstance;
    app.userCollection = [];
    fixture.detectChanges();
    expect(app).toBeTruthy();
  }));

  /*it('should call the search button', ((done: any) => {
    const fixture = TestBed.createComponent(UserFollowerComponent);
    const comp = fixture.debugElement.componentInstance;
    comp.userCollection = [];
    comp.store.dispatch(new userActions.LoadAllFollowers('https://api.github.com/users/davestaab/followers'))
    fixture.detectChanges();

    this.store.select(fromRoot.getFollowers).subscribe( data => {
        if (data) {
            comp.userCollection = data;
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(Object.keys(comp.userCollection).length).toBeGreaterThan(0);
                done();
            });
        }
    });
  }));*/
});
