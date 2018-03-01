import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-house',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mobileQuery: MediaQueryList;
  imageUrl = '';
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
    public afAuth: AngularFireAuth,
    media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.loginCallback();
  }

  loginCallback() {
    firebase.auth().getRedirectResult().then((result) => {
      if (result.credential) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      }
      if (result.user !== null) {
        // The signed-in user info.
        this.imageUrl = result.user.photoURL;
      }
    }).catch((error) => {
      console.log(error);
    });
  }
}
