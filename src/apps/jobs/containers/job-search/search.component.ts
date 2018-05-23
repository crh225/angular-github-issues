import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-job-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    constructor(public snackBar: MatSnackBar) { }

    ngOnInit() {
        this.snackBar.open('Jobs is a work in progress.', 'Ok');
    }

}
