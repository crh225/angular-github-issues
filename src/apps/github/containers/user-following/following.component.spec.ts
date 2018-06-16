import { TestBed, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserFollowingComponent, UserSearchCollectionComponent, SubNavigationComponent } from '@app/github';
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

describe('UserFollowingComponent', () => {
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
  declarations: [UserSearchCollectionComponent, UserFollowingComponent, SubNavigationComponent],
  providers: [
    Actions,
    UserEffects]
    }).compileComponents();
  }));

  it('should create the user following component', async(() => {
    const fixture = TestBed.createComponent(UserFollowingComponent);
    const app = fixture.debugElement.componentInstance;
    app.userCollection = [];
    fixture.detectChanges();
    expect(app).toBeTruthy();
  }));

  it('should call the search button', ((done: any) => {
    const fixture = TestBed.createComponent(UserFollowingComponent);
    const comp = fixture.debugElement.componentInstance;
    comp.userCollection = [];
    comp.store.dispatch(new userActions.LoadAllFollowing('crh225'));
    fixture.detectChanges();

    comp.store.select(fromRoot.getFollowing).subscribe( data => {
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
  }));
});
