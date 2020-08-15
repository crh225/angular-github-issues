import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
    selector: 'app-auth-facebook',
    templateUrl: './auth-facebook.component.html',
    styleUrls: ['../auth.component.scss']
})
export class UserAuthFacebookComponent {

    public user: any = null;
    public imageUrl = 'https://en.facebookbrand.com/wp-content/uploads/2016/05/FB-fLogo-Blue-broadcast-2.png';
    private provider = new firebase.auth.FacebookAuthProvider();

    constructor() {
    }

    signIn() {
        firebase.auth().signInWithRedirect(this.provider);
    }

}
