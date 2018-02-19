import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActionsSubject, Store } from '@ngrx/store';
import * as userActions from '@app/github/store/actions';
import * as fromRoot from '@app/github/store/reducers';
import { User, Repo } from '@app/github/shared/models';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
    selector: 'app-user-repos',
    templateUrl: './user-repos.component.html',
    styleUrls: ['./user-repos.component.css']
})
export class UserReposComponent implements OnInit, AfterViewInit {
    @ViewChild(MatSort) sort: MatSort;
    public repoCollection: Repo[];
    dataSource = new MatTableDataSource(this.repoCollection);
    displayedColumns = ['name', 'description', 'language',
        'created_at', 'has_issues', 'forks_count', 'archived'];

    constructor(
        private store: Store<fromRoot.AppState>,
        private actionsSubject: ActionsSubject) {

        this.actionsSubject
            .asObservable()
            .subscribe((data: any) => {
                switch (data.type) {
                    case '[User] LOAD USER REPO SUCCESS':
                        break;
                    default:
                }
            });
    }

    ngOnInit() {
        this.store.select(fromRoot.getUserRepo).subscribe(data => {
            if (data) {
                this.repoCollection = data;
                this.dataSource = new MatTableDataSource(this.repoCollection);
            }
        });
    }

    /**
     * Set the sort after the view init since this component will
     * be able to query its view for the initialized sort.
     */
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
}
