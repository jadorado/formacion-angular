import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcertsComponent } from '../concerts.component';
import { RouterModule } from '@angular/router';
import { ConcertsListComponent } from '../concerts-list/concerts-list.component';
import { ConcertsFormComponent } from '../concerts-form/concerts-form.component';

const ROUTES = [
  {
    path: '', component: ConcertsComponent, children:
    [
      { path: '', component: ConcertsListComponent },
      { path: 'new', component: ConcertsFormComponent }
    ]
  }
];

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

