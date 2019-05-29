import { TestBed, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepoSearchComponent } from './search.component';
import { SharedModule } from '@app/github/shared';
import { ChartComponent, SearchCollectionComponent } from '@app/github/containers/repo-search';
import { ChartsModule } from 'ng2-charts';
import * as forApplication from '@app/github/store/reducers';
import { EffectsModule, Actions } from '@ngrx/effects';
import { IssueEffects, RepoEffects } from '@app/github/store/effects';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedTestingModule } from '@app/github/shared';
import { CoreModule } from '../../../core';

describe('RepoSearchComponent', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
  beforeEach((() => {
    TestBed.configureTestingModule({
    imports: [
    BrowserAnimationsModule,
    SharedTestingModule.forRoot(),
    SharedModule.forRoot(),
    RouterTestingModule,
    ChartsModule,
    CoreModule.forRoot(),
    StoreModule.forRoot(forApplication.reducers),
    EffectsModule.forRoot([IssueEffects, RepoEffects])
  ],
  declarations: [RepoSearchComponent, SearchCollectionComponent, ChartComponent],
  providers: [
    Actions,
    IssueEffects]
    }).compileComponents();
  }));

  it('should create the search component', async(() => {
    const fixture = TestBed.createComponent(RepoSearchComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  }));

  it('should call the submit button', ((done: any) => {
    const fixture = TestBed.createComponent(RepoSearchComponent);
    const comp = fixture.debugElement.componentInstance;
    comp.query = 'angular';
    comp.repoCollection = [];
    fixture.detectChanges();

    comp.search();
    fixture.detectChanges();
    comp.actionsSubject
    .asObservable()
    .subscribe((data: any) => {
        switch (data.type) {
            case '[Repo] LOAD ALL SUCCESS':
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    fixture.detectChanges();
                    expect(Object.keys(comp.repoCollection).length).toBeGreaterThan(0);
                    done();
                  });
                break;
        }
    });

  }));
});
