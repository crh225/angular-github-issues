import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '@app/github/shared/models';
import { Issue } from '@app/github/shared/models';
import { ActionsSubject, Store } from '@ngrx/store';
import * as userActions from '@app/github/store/actions';
import * as fromRoot from '@app/github/store/reducers';

@Component({
  selector: 'app-issue-collection',
  templateUrl: './issue-collection.component.html',
  styleUrls: ['./issue-collection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueCollectionComponent {
  @Input() repoIssueCollection: Issue[];

  constructor(
    private store: Store<fromRoot.AppState>,
    private actionsSubject: ActionsSubject){
    
  }

  setUser(user: User) {
    this.store.dispatch(new userActions.SetCurrentUserId(user.login));
  }
}
