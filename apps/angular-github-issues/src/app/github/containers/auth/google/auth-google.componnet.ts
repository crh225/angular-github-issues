import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
    selector: 'app-auth-google',
    templateUrl: './auth-google.component.html',
    styleUrls: ['../auth.component.scss']
})
export class UserAuthGoogleComponent {

    public user: any = null;
    public imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg';
    private provider = new firebase.auth.GoogleAuthProvider();

    constructor() {
    }

    signIn() {
        firebase.auth().signInWithRedirect(this.provider);
    }

}
