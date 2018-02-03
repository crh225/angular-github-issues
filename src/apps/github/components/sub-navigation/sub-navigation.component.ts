import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { User } from '@app/github/shared/models';
import { ActionsSubject, Store } from '@ngrx/store';
import * as userActions from '@app/github/store/actions';
import * as fromRoot from '@app/github/store/reducers';
import { Router } from '@angular/router';

@Component({
    selector: 'app-gsub-navigation',
    templateUrl: './sub-navigation.component.html',
    styleUrls: ['./sub-navigation.component.css']
})
export class SubNavigationComponent implements OnInit {

    public login = '';
    constructor(private store: Store<fromRoot.AppState>,
        private actionsSubject: ActionsSubject) {
        this.store.select(fromRoot.getSelectedUserId).subscribe(data => {
            if (data) {
                this.login = data;
            }
        });
    }

    ngOnInit() {

    }
}
