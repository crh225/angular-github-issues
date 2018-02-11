import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { ActionsSubject, Store } from '@ngrx/store';
import * as userActions from '@app/github/store/actions';
import * as fromRoot from '@app/github/store/reducers';
import { GithubService } from '@app/github/shared/services';
import { User } from '@app/github/shared/models';

@Component({
    selector: 'app-user-auth',
    templateUrl: './auth.component.html'
})
export class UserAuthComponent implements OnInit {

    public code: any;
    public token: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private githubService: GithubService,
        private _http: HttpClient) {
    }

    ngOnInit() {
        this.code = this.route.snapshot.queryParams['code'];
        if (this.code) {
            // redirect again to github to get baerer token
            this.getToken();
        }
    }

    getToken() {
        this.githubService.getApiToken(this.code).subscribe(data => {
            this.token = data;
        });
    }

}
