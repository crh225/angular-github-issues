import { TestBed, async } from '@angular/core/testing';
import { SharedModule } from '../../../shared';
import { ChartComponent } from '../../../containers/repo-search';
import { ChartsModule } from 'ng2-charts';
import * as forApplication from '../../../store/reducers';
import { EffectsModule, Actions } from '@ngrx/effects';
import { IssueEffects, RepoEffects } from '../../../store/effects';
import { StoreModule } from '@ngrx/store';
import { SharedTestingModule } from '../../../shared';

describe('ChartComponent', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
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
