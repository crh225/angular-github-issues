import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { ActionsSubject, Store } from '@ngrx/store';
import * as userActions from '@app/github/store/actions';
import * as fromRoot from '@app/github/store/reducers';
import { User, Repo } from '@app/github/shared/models';

@Component({
    selector: 'app-user-repos',
    templateUrl: './user-repos.component.html',
    styleUrls: ['./user-repos.component.css']
})
export class UserReposComponent implements OnInit {

    public repoCollection: Repo[];

    constructor(
        private store: Store<fromRoot.AppState>,
        private actionsSubject: ActionsSubject,
        public snackBar: MatSnackBar) {

        this.actionsSubject
            .asObservable()
            .subscribe((data: any) => {
                switch (data.type) {
                    case '[User] LOAD USER REPO SUCCESS':
                        break;
                    default:
                }
            });
    }

    ngOnInit() {
        this.store.select(fromRoot.getUserRepo).subscribe(data => {
            if (data) {
                this.repoCollection = data;
            }
        });
    }

}
