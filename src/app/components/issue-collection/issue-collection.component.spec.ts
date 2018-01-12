import { TestBed, async } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/components/shared';
import { IssueCollectionComponent } from '@app/components/issue-collection';
import { EffectsModule, Actions } from '@ngrx/effects';
import { IssueEffects, RepoEffects } from '@app/components/store/effects';
import { SharedTestingModuleWithProviders } from '@app/components/shared';

describe('IssueCollectionComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [
        SharedTestingModuleWithProviders
  ],
  declarations: [IssueCollectionComponent],
  providers: [
    Actions,
    IssueEffects]
    }).compileComponents();
  }));

  it('should create the issue collection component', async(() => {
    const fixture = TestBed.createComponent(IssueCollectionComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
