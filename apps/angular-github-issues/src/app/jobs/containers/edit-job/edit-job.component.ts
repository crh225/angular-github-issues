import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireAuth } from '@angular/fire/auth';
import { Jobs } from '../../shared';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {

  _db: AngularFirestore;
  jobForm = new FormGroup({
    company: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    salary: new FormControl('', [Validators.min(30000), Validators.max(200000)])
  });
  id = '';
  constructor(public snackBar: MatSnackBar,
    private route: ActivatedRoute,
    public afAuth: AngularFireAuth,
    db: AngularFirestore) {
    this._db = db;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this._db
        .collection<Jobs>('jobs')
        .doc(
          params.get('id')
        ).valueChanges()
        .subscribe((item) => {
          this.jobForm.patchValue(item);
        });
    });
  }

  editJob() {
    this._db
      .collection<Jobs>('jobs')
      .doc(this.id)
      .update(
        {
          company: (this.jobForm.get('company').value),
          description: (this.jobForm.get('description').value),
          title: (this.jobForm.get('title').value),
          salary: this.jobForm.get('salary').value
        }
      ).then(() => {
        this.snackBar.open('Job was updated successfully', 'Ok', {
          duration: 2000,
        });
      }).catch((error) => {
        this.snackBar.open('An error has occured', 'Ok', {
          duration: 2000,
        });
      });
  }

}
