






import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable ,  of } from 'rxjs';
import { ActionsSubject, Store } from '@ngrx/store';
import * as userActions from '@app/github/store/actions';
import * as fromRoot from '@app/github/store/reducers';
import { User } from '@app/github/shared/models';

@Injectable()
export class UserExistsGuard implements CanActivate {

    // this guard needs some more work
    // if the route param does not match the selecteduserid then it needs to 404

    constructor(
        private store: Store<fromRoot.AppState>,
        private actionsSubject: ActionsSubject,
        private router: Router
    ) { }

    waitForCollectionToLoad(): Observable<boolean> {
        // the map should be a filter, but I need a new create selecter that is a boolean, and not a string
        // for now, everything is passing through if the selecteduserid is not undefined
        return this.store.select(fromRoot.getSelectedUserId)
            .map( loaded => {
                if (loaded !== undefined) {
                    return true;
                } else {
                    return false;
                }
            })
            .take(1);
    }

    hasUser(id: string): Observable<boolean> {
        let bReturn: boolean;
        if (id.length > 0) {
            bReturn = true;
        } else {
            bReturn = false;
        }
        return of(bReturn);
    }

    canActivate(route: ActivatedRouteSnapshot): any {
        return this.waitForCollectionToLoad().switchMap(() =>
         this.hasUser(route.params['id'])
        );
    }
}
