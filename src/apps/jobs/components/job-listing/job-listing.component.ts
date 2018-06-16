import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-job-listing',
    templateUrl: './job-listing.component.html',
    styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit {
    _db: AngularFirestore;
    jobs: Observable<any>;

    constructor(public snackBar: MatSnackBar, public afAuth: AngularFireAuth, db: AngularFirestore) {
        //this.afAuth.auth.signInAnonymously();
        this.jobs = db.collection('jobs').valueChanges();
        this._db = db;
    }

    ngOnInit() {
        //this.snackBar.open('Jobs is a work in progress.', 'Ok');
    }

}
