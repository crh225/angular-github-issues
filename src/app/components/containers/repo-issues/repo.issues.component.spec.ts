import { TestBed, async } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RepoIssuesComponent } from './repo-issues.component';
import { SharedModule } from '@app/components/shared';
import { IssueCollectionComponent } from '@app/components/issue-collection';
import * as forApplication from '@app/components/store/reducers';
import { EffectsModule, Actions } from '@ngrx/effects';
import { IssueEffects, RepoEffects } from '@app/components/store/effects';
import { StoreModule } from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import { SharedTestingModule } from '@app/components/shared';

describe('RepoIssuesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [
    SharedTestingModule.forRoot(),
    SharedModule.forRoot(),
    RouterTestingModule,
    StoreModule.forRoot(forApplication.reducers),
    EffectsModule.forRoot([IssueEffects, RepoEffects])
  ],
  declarations: [RepoIssuesComponent, IssueCollectionComponent],
  providers: [
    Actions,
    IssueEffects]
    }).compileComponents();
  }));

  it('should create the issues component', async(() => {
    const fixture = TestBed.createComponent(RepoIssuesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
