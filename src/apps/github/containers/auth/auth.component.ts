import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { ActionsSubject, Store } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import * as userActions from '@app/github/store/actions';
import * as fromRoot from '@app/github/store/reducers';
import { GithubService } from '@app/github/shared/services';
import { User } from '@app/github/shared/models';

@Component({
    selector: 'app-user-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class UserAuthComponent {

    public code: any;
    public token = '';
    public user: any = null;
    public imageUrl = 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png';
    private provider = new firebase.auth.GithubAuthProvider();

    constructor(
        public afAuth: AngularFireAuth,
        private store: Store<fromRoot.AppState>,
        private actionsSubject: ActionsSubject,
        private _http: HttpClient) {

        firebase.auth().getRedirectResult().then((result) => {
            if (result.credential) {
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                this.token = result.credential.accessToken;
                this.store.dispatch(new userActions.SetApiToken(result.credential.accessToken));
            }
            if (result.user !== null) {
                // The signed-in user info.
                this.user = result.user;
                console.log(this.user);
                this.imageUrl = this.user.photoURL;
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    signIn() {
        firebase.auth().signInWithRedirect(this.provider);
    }

    signOut() {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            // todo: put this in the redux store
            localStorage.clear();
            this.user = undefined;
            this.token = '';
            this.store.dispatch(new userActions.SetApiToken(undefined));
            this.imageUrl = 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png';
        }).catch((error) => {
            console.log(error);
        });
    }

}
