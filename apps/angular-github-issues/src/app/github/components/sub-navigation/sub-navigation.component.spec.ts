import { TestBed } from '@angular/core/testing';
import * as forApplication from '../../store/reducers';
import { EffectsModule, Actions } from '@ngrx/effects';

import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

import { CoreModule } from '../../../core';
import { SharedTestingModule, SharedModule } from '../../shared';
import { UserEffects } from '../../store';
import { SubNavigationComponent } from './sub-navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
