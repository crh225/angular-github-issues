import { TestBed, async } from '@angular/core/testing';
import { SharedModule } from '@app/github/shared';
import { ChartComponent } from '@app/github/containers/repo-search';
import { ChartsModule } from 'ng2-charts';
import * as forApplication from '@app/github/store/reducers';
import { EffectsModule, Actions } from '@ngrx/effects';
import { IssueEffects, RepoEffects } from '@app/github/store/effects';
import { StoreModule } from '@ngrx/store';
import { SharedTestingModule } from '@app/github/shared';

describe('ChartComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [
    SharedTestingModule.forRoot(),
    SharedModule.forRoot(),
    ChartsModule,
    StoreModule.forRoot(forApplication.reducers),
    EffectsModule.forRoot([IssueEffects, RepoEffects])
  ],
  declarations: [ChartComponent],
  providers: [
    Actions,
    IssueEffects]
    }).compileComponents();
  }));

  it('should create the chart component', async(() => {
    const fixture = TestBed.createComponent(ChartComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
