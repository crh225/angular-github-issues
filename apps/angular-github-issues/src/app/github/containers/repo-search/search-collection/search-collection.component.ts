import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Repo } from '../../../shared/models';
import { Store } from '@ngrx/store';
import * as repoActions from '../../../store/actions';
import * as fromRoot from '../../../store/reducers';

@Component({
  selector: 'app-search-collection',
  templateUrl: './search-collection.component.html',
  styleUrls: ['./search-collection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchCollectionComponent {
  @Input() repoCollection: Repo[];

  constructor(private store: Store<fromRoot.AppState>) { }

  setRepoInStore(repo: Repo) {
    this.store.dispatch(new repoActions.SetCurrentRepoId(repo.id));
  }
}
