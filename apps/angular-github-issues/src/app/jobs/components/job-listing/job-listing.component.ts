import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Jobs } from '../../shared';

@Component({
    selector: 'app-job-listing',
    templateUrl: './job-listing.component.html',
    styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit {

    _db: AngularFirestore;
    jobs: Observable<any>;

    constructor(public snackBar: MatSnackBar, public afAuth: AngularFireAuth, db: AngularFirestore) {
        this._db = db;
        this.jobs = db
            .collection<Jobs>('jobs')
            .snapshotChanges()
            .pipe(map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            }));
    }

    ngOnInit() {
    }

    delete(id: string): void {
        this._db
            .collection<Jobs>('jobs')
            .doc(id)
            .delete()
            .then(() => {
                this.snackBar.open('Job was deleted successfully', 'Ok', {
                    duration: 2000,
                });
            }).catch((error) => {
                this.snackBar.open('An error has occured', 'Ok', {
                    duration: 2000,
                });
            });
    }

}
