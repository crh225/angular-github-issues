import { TestBed, async } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/components/shared';
import { SearchCollectionComponent } from '@app/components/search-collection';
import { ChartComponent } from '@app/components/chart';
import { ChartsModule } from 'ng2-charts';
import * as forApplication from '@app/components/store/reducers';
import { EffectsModule, Actions } from '@ngrx/effects';
import { IssueEffects, RepoEffects } from '@app/components/store/effects';
import { StoreModule } from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import { SharedTestingModule } from '@app/components/shared';

describe('RepoSearchComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [
    SharedTestingModule.forRoot(),
    SharedModule.forRoot(),
    RouterTestingModule,
    ChartsModule,
    StoreModule.forRoot(forApplication.reducers),
    EffectsModule.forRoot([IssueEffects, RepoEffects])
  ],
  declarations: [SearchCollectionComponent, ChartComponent],
  providers: [
    Actions,
    IssueEffects]
    }).compileComponents();
  }));

  it('should create the search collection component', async(() => {
    const fixture = TestBed.createComponent(SearchCollectionComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
