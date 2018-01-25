import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '@app/github/shared/models';
import { ActionsSubject, Store } from '@ngrx/store';
import * as userActions from '@app/github/store/actions';
import * as fromRoot from '@app/github/store/reducers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-search-collection',
  templateUrl: './search-collection.component.html',
  styleUrls: ['./search-collection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSearchCollectionComponent {
  @Input() userCollection: User[];

  constructor(private store: Store<fromRoot.AppState>) {}
}
