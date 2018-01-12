import { TestBed, async } from '@angular/core/testing';
import { RepoIssuesComponent } from './repo-issues.component';
import { SharedModule } from '@app/components/shared';
import { IssueCollectionComponent } from '@app/components/issue-collection';
import { EffectsModule, Actions } from '@ngrx/effects';
import { IssueEffects, RepoEffects } from '@app/components/store/effects';
import {RouterTestingModule} from '@angular/router/testing';
import { SharedTestingModule, SharedTestingModuleWithProviders } from '@app/components/shared';

describe('RepoIssuesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [
        SharedTestingModuleWithProviders
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
