import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import * as userActions from '../../../store/actions';
import * as fromRoot from '../../../store/reducers';
import { User, Issue } from '../../../shared';

@Component({
  selector: 'app-issue-collection',
  templateUrl: './issue-collection.component.html',
  styleUrls: ['./issue-collection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueCollectionComponent {
  @Input() repoIssueCollection: Issue[];

  constructor(
    private store: Store<fromRoot.AppState>) {
  }

  setUser(user: User) {
    this.store.dispatch(new userActions.SetCurrentUserId(user.login));
  }
}
