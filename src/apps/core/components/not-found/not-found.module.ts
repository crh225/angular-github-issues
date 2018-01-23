import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found.component';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
 declarations: [ NotFoundComponent ],
 imports: [RouterModule],
 exports:  [ NotFoundComponent ]
})
export class NotFoundModule {
}
