import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import LogRocket from 'logrocket';
import {
  MatSidenav
} from '@angular/material';
@Component({
  selector: 'app-house',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('snav') public sidenav: MatSidenav;
  mobileQuery: MediaQueryList;
  imageUrl = '';
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
    public afAuth: AngularFireAuth,
    private router: Router,
    media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    LogRocket.init('rwovrh/prod');
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

  sendToRoute(sRoute: string, isMobile: boolean) {
    if (isMobile) {
      this.sidenav.close();
      this.router.navigate([sRoute]);
    }
  }
}
