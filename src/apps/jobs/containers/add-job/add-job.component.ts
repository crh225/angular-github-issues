import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Jobs } from '../../shared';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as Filter from 'bad-words';
@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  filter = new Filter();
  _db: AngularFirestore;
  jobs: Observable<any>;
  jobForm = new FormGroup({
    company: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    salary: new FormControl('')
  });

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
          company: this.filter.clean(this.jobForm.get('company').value),
          description: this.filter.clean(this.jobForm.get('description').value),
          title: this.filter.clean(this.jobForm.get('title').value),
          salary: this.filter.clean(this.jobForm.get('salary').value)
        }
      ).then(() => {
        this.snackBar.open('Job was added successfully', 'Ok', {
          duration: 2000,
        });
      }).catch((error) => {
        this.snackBar.open('An error has occured', 'Ok', {
          duration: 2000,
        });
      });
  }

}
