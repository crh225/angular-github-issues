import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { UserSearchComponent } from './user-search.component';
import { SharedModule } from '@app/github/shared';
import * as forApplication from '@app/github/store/reducers';
import { EffectsModule, Actions } from '@ngrx/effects';
import { UserEffects } from '@app/github/store/effects';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedTestingModule } from '@app/github/shared';
import { CoreModule } from '@core/';

describe('UserSearchComponent', () => {
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
  declarations: [UserSearchComponent],
  providers: [
    Actions,
    UserEffects]
    }).compileComponents();
  }));

  it('should create the user search component', async(() => {
    const fixture = TestBed.createComponent(UserSearchComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  }));

  it('should call the search button', ((done: any) => {
    const fixture = TestBed.createComponent(UserSearchComponent);
    const comp = fixture.debugElement.componentInstance;
    comp.query = 'crh225';
    comp.userCollection = [];
    fixture.detectChanges();

    comp.search();
    fixture.detectChanges();
    comp.actionsSubject
    .asObservable()
    .subscribe((data: any) => {
        switch (data.type) {
            case '[User] LOAD ALL SUCCESS':
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    fixture.detectChanges();
                    expect(Object.keys(comp.userCollection).length).toBeGreaterThan(0);
                    done();
                  });
                break;
        }
    });

  }));
});
