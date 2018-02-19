import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
    selector: 'app-auth-github',
    templateUrl: './auth-github.component.html',
    styleUrls: ['../auth.component.scss']
})
export class UserAuthGithubComponent {

    public user: any = null;
    public imageUrl = 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png';
    private provider = new firebase.auth.GithubAuthProvider();

    constructor() {
    }

    signIn() {
        firebase.auth().signInWithRedirect(this.provider);
    }

}
