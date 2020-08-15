import { Component, OnInit } from '@angular/core';
import { ActionsSubject, Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';

@Component({
    selector: 'app-user-follower',
    templateUrl: './follower.component.html',
    styleUrls: ['./follower.component.css']
})
export class UserFollowerComponent implements OnInit {

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
                    case '[User] Load All Followers Success':
                        this.searching = false;
                        break;
                    default:
                }
            });
    }

    ngOnInit() {
        this.store.select(fromRoot.getFollowers).subscribe(data => {
            if (data) {
                this.userCollection = data;
            }
        });
    }

}
