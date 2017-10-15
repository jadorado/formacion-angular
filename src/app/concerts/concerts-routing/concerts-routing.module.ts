import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcertsComponent } from '../concerts.component';
import { RouterModule } from '@angular/router';

const ROUTES = [{ path: '', component: ConcertsComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ConcertsRoutingModule {
}

