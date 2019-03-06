import { Component, OnInit, Input } from '@angular/core';
import { ActionsSubject, Store } from '@ngrx/store';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import * as userActions from '@app/github/store/actions';
import * as fromRoot from '@app/github/store/reducers';

@Component({
    selector: 'app-auth-success',
    templateUrl: './auth-success.component.html',
    styleUrls: ['../auth.component.scss']
})
export class UserAuthSuccessComponent {

    @Input() user: any;
    public imageUrl = '';
    constructor(public afAuth: AngularFireAuth,
        private store: Store<fromRoot.AppState>,
        private actionsSubject: ActionsSubject) {
    }

    signOut() {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            localStorage.clear();
            this.user = undefined;
            this.store.dispatch(new userActions.SetApiToken(undefined));
            this.imageUrl = 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png';
        }).catch((error) => {
            console.log(error);
        });
    }

}
