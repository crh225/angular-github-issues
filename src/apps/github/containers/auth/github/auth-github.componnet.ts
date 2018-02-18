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
    selector: 'app-auth-github',
    templateUrl: './auth-github.component.html',
    styleUrls: ['./auth-github.component.css']
})
export class UserAuthGithubComponent {
    // todo: clean up imports and variables
    public code: any;
    public token = '';
    public user: any = null;
    public imageUrl = 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png';
    private provider = new firebase.auth.GithubAuthProvider();

    constructor() {
    }

    signIn() {
        firebase.auth().signInWithRedirect(this.provider);
    }

}
