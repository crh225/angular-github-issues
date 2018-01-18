import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
  <div  class="centered-content">
  The page you have requested cannot be found.
  Please go to the <a routerLink="/">homepage</a></div>
  `,
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent {
}
