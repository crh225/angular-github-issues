import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '@app/github/shared/models';
import { ActionsSubject, Store } from '@ngrx/store';
import * as userActions from '@app/github/store/actions';
import * as fromRoot from '@app/github/store/reducers';
import { Router } from '@angular/router';

@Component({
    selector: 'app-gsub-navigation',
    template: `
        <mat-toolbar>
            <span>User Detail
                <button mat-button color="warn" routerLink="/github/followers" routerLinkActive="active-link">Followers</button>
                <button mat-button color="warn" routerLink="/github/following" routerLinkActive="active-link">Following</button>
            </span>
        </mat-toolbar>
  `,
    styles: ['.active-link { background-color: #cbcccb; }'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubNavigationComponent {

}
