import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-job-listing',
    templateUrl: './job-listing.component.html',
    styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit {
    _db: AngularFirestore;
    jobs: Observable<any>;
    jobCollectionRef: AngularFirestoreCollection<any>;

    constructor(public snackBar: MatSnackBar, public afAuth: AngularFireAuth, db: AngularFirestore) {
        this._db = db;
        this.jobCollectionRef = db.collection<any>('jobs');
        this.jobs = this.jobCollectionRef
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

        this.jobCollectionRef.doc(id).delete().then(() => {
            this.snackBar.open('Job was deleted successfully', 'Ok', {
                duration: 2000,
            });
        });

    }

}
