import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ActionsSubject, Store } from '@ngrx/store';
import * as repoActions from '@app/github/store/actions';
import * as fromRoot from '@app/github/store/reducers';
import { RepoSearchResult, Repo } from '@app/github/shared/models';

@Component({
  selector: 'app-repo-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class RepoSearchComponent implements OnInit {

  public searchControl: FormControl = new FormControl();
  public repoCollection: RepoSearchResult[] = [];
  public query = '';
  public searching = false;
  public error: any;
  constructor(
    private store: Store<fromRoot.AppState>,
    private actionsSubject: ActionsSubject) {

    this.actionsSubject
        .asObservable()
        .subscribe((data: any) => {
            switch (data.type) {
                case '[Repo] LOAD ALL SUCCESS':
                    this.repoCollection = data.payload;
                    this.searching = false;
                    break;
                case '[Repo] LOAD FAILURE':
                    this.error = data.payload;
                    this.searching = false;
                    break;
                default:
            }
        });

}

  ngOnInit() {
    this.store.dispatch(new repoActions.SetCurrentRepoId(undefined));
  }

  search(): void {
    if (this.query.trim() !== '') {
      this.searching = true;
      this.error = undefined;
      this.store.dispatch(new repoActions.LoadAllRepos({ searchName: this.query }));
    }
  }
}
