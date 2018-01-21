import { TestBed, async } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/github/shared';
import { ChartComponent, SearchCollectionComponent } from '@app/github/containers/repo-search';
import { ChartsModule } from 'ng2-charts';
import * as forApplication from '@app/github/store/reducers';
import { EffectsModule, Actions } from '@ngrx/effects';
import { IssueEffects, RepoEffects } from '@app/github/store/effects';
import * as repoActions from '@app/github/store/actions';
import { StoreModule } from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import { SharedTestingModule } from '@app/github/shared';
import { CoreModule } from '@core/';

describe('SearchCollectionComponent', () => {
  beforeEach((() => {
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


    app.store.select(forApplication.getSelectedRepo).subscribe( data => {
      if (data) {
         console.log(data);
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

  /*it('should set the repo in the store', ((done: any) => {
    const fixture = TestBed.createComponent(SearchCollectionComponent);
    const comp = fixture.debugElement.componentInstance;
    //comp.store.dispatch(new repoActions.SetCurrentRepoId(24195339));
    const repo = { id: 24195339 };
    //repo.id = 24195339;
    //comp.setRepoInStore(repo);
    fixture.detectChanges();
    expect(comp).toBeTruthy();
    done();
  }));*/
});
