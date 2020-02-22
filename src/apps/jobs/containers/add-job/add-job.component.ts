import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Jobs } from '../../shared';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {


  _db: AngularFirestore;
  jobs: Observable<any>;
  jobForm = new FormGroup({
    company: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    salary: new FormControl('')
  });
  jobCollectionRef: AngularFirestoreCollection<any>;

  constructor(public snackBar: MatSnackBar, public afAuth: AngularFireAuth, db: AngularFirestore) {
    this._db = db;
  }

  ngOnInit(): void {
  }

  addJob() {
    this._db
      .collection<Jobs>('jobs')
      .add(
        {
          company: this.jobForm.get('company').value,
          description: this.jobForm.get('description').value,
          title: this.jobForm.get('title').value
        }
      ).then(() => {
        this.snackBar.open('Job was added successfully', 'Ok', {
          duration: 2000,
        });
      });
  }

}
