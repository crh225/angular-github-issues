import { Component, OnInit, Input } from '@angular/core';
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
    selector: 'app-auth-success',
    templateUrl: './auth-success.component.html',
    styleUrls: ['./auth-success.component.css']
})
export class UserAuthSuccessComponent {
    // todo: clean up imports and variables
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
