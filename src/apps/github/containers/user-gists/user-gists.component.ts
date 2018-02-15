import { Component, OnInit } from '@angular/core';
import { ActionsSubject, Store } from '@ngrx/store';
import * as userActions from '@app/github/store/actions';
import * as fromRoot from '@app/github/store/reducers';
import { User, Repo, Gist } from '@app/github/shared/models';

@Component({
    selector: 'app-user-gists',
    templateUrl: './user-gists.component.html',
    styleUrls: ['./user-gists.component.css']
})
export class UserGistsComponent implements OnInit {

    public gistCollection: Gist[];

    constructor(
        private store: Store<fromRoot.AppState>,
        private actionsSubject: ActionsSubject) {

        this.actionsSubject
            .asObservable()
            .subscribe((data: any) => {
                switch (data.type) {
                    case '[User] LOAD USER GISTS SUCCESS':
                        break;
                    default:
                }
            });
    }

    ngOnInit() {
        this.store.select(fromRoot.getUserGist).subscribe(data => {
            if (data) {
                this.gistCollection = data;
            }
        });

    }

}
