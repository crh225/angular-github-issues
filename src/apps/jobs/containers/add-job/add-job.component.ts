import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  addJob() {
    this.snackBar.open('Adding Jobs is a work in progress.', 'Ok');
  }

}
