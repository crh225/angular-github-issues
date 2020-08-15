import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActionsSubject, Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    token = '';
    constructor(private store: Store<fromRoot.AppState>,
        private actionsSubject: ActionsSubject) {
        store.select(fromRoot.getApiToken).subscribe(data => {
            if (data) {
                this.token = `${data}`;
            }
        });
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.token !== '') {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.token}`
                }
            });
        }
        return next.handle(request);
    }
}
