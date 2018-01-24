import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { ActionsSubject, Store } from '@ngrx/store';
import * as userActions from '@app/github/store/actions';
import * as fromRoot from '@app/github/store/reducers';
import { User } from '@app/github/shared/models';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

    public searchControl: FormControl = new FormControl();
    public userCollection: any; // UserSearchResult[] = [];
    public query = '';
    public searching = false;
    constructor(
      private store: Store<fromRoot.AppState>,
      private actionsSubject: ActionsSubject,
      public snackBar: MatSnackBar) {

      this.actionsSubject
          .asObservable()
          .subscribe((data: any) => {
              switch (data.type) {
                  case '[User] LOAD ALL SUCCESS':
                      this.userCollection = data.payload;
                      this.searching = false;
                      break;
                  default:
              }
          });

  }

    ngOnInit() {
      this.store.dispatch(new userActions.SetCurrentUserId(undefined));
    }

    search(): void {
      if (this.query.trim() !== '') {
        this.searching = true;
        this.store.dispatch(new userActions.LoadAllUsers({ searchName: this.query }));
      }
    }

}
