import { Component, OnInit } from '@angular/core';
import {  ActionsSubject, Store } from '@ngrx/store';
import * as fromRoot from '@app/github/store/reducers';

@Component({
    selector: 'app-user-following',
    templateUrl: './following.component.html',
    styleUrls: ['./following.component.css']
})
export class UserFollowingComponent implements OnInit {

    public userCollection: any;
    public searching = false;
    constructor(
        private store: Store<fromRoot.AppState>,
        private actionsSubject: ActionsSubject) {

        this.actionsSubject
            .asObservable()
            .subscribe((data: any) => {
                switch (data.type) {
                    case '[User] SET CURRENT USER ID':
                        this.searching = true;
                        break;
                    case '[User] Load All Following Success':
                        this.searching = false;
                        break;
                    default:
                }
            });
    }

    ngOnInit() {
        this.store.select(fromRoot.getFollowing).subscribe(data => {
            if (data) {
                this.userCollection = data;
            }
        });
    }

}
