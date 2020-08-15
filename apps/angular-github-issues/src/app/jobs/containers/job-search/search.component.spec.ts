import { TestBed, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search.component';

import { CoreModule } from '../../../core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { JobListingComponent } from '../../components';
import { environment } from '../../../../environments/environment';


describe('JobSearchComponent', () => {
    beforeEach((() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule,
                CoreModule.forRoot(),
                AngularFireModule.initializeApp(environment.firebaseConfig),
                AngularFirestoreModule, // imports firebase/firestore, only needed for database features
                AngularFireAuthModule, // imports firebase/auth, only needed for auth features
            ],
            declarations: [SearchComponent, JobListingComponent],
            providers: [
            ]
        }).compileComponents();
    }));

    it('should create the job search component', ((done: any) => {
        const fixture = TestBed.createComponent(SearchComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
        done();
    }));

});
