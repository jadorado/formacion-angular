import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordingsComponent } from '../recordings.component';
import { RouterModule } from '@angular/router';

const ROUTES = [{ path: '', component: RecordingsComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RecordingsRoutingModule {
}
