import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { ActionsSubject, Store } from '@ngrx/store';
import * as repoActions from '@app/github/store/actions';
import * as fromRoot from '@app/github/store/reducers';
import { User } from '@app/github/shared/models';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  constructor(
    private store: Store<fromRoot.AppState>,
    private actionsSubject: ActionsSubject) {
}

  ngOnInit() {
  }

}
