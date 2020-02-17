import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-job-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    _db: AngularFirestore;
    jobs: Observable<any>;

    constructor(public snackBar: MatSnackBar, public afAuth: AngularFireAuth, db: AngularFirestore) {
        this.jobs = db.collection('jobs').valueChanges();
        this._db = db;
    }

    ngOnInit() {
    }

}
