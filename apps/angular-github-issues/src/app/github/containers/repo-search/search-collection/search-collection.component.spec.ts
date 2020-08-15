import { TestBed, async } from '@angular/core/testing';
import { SharedModule } from '../../../shared';
import { ChartComponent, SearchCollectionComponent } from '../../../containers/repo-search';
import { ChartsModule } from 'ng2-charts';
import * as forApplication from '../../../store/reducers';
import { EffectsModule, Actions } from '@ngrx/effects';
import { IssueEffects, RepoEffects } from '../../../store/effects';
import * as repoActions from '../../../store/actions';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedTestingModule } from '../../../shared';
import { CoreModule } from '../../../../core';

describe('SearchCollectionComponent', () => {
  beforeEach((() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
    TestBed.configureTestingModule({
      imports: [
        SharedTestingModule.forRoot(),
        SharedModule.forRoot(),
        CoreModule.forRoot(),
        RouterTestingModule,
        ChartsModule,
        StoreModule.forRoot(forApplication.reducers),
        EffectsModule.forRoot([IssueEffects, RepoEffects]),
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

  it('should set the repo in the store', ((done: any) => {
    const fixture = TestBed.createComponent(SearchCollectionComponent);
    const app = fixture.debugElement.componentInstance;
    app.repoCollection = [];
    app.store.dispatch(new repoActions.LoadAllRepos({ searchName: 'angular' }));
    fixture.detectChanges();

    const repo = { id: 24195339 };
    app.setRepoInStore(repo);
    fixture.detectChanges();


    app.store.select(forApplication.getSelectedRepo).subscribe(data => {
      if (data) {
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(data.id === 24195339).toBeTruthy();
          done();
        });
      } else {
        console.log('no data');
      }
    });
  }));

});
