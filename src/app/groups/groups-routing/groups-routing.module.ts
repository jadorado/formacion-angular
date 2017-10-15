import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from '../groups.component';
import { RouterModule } from '@angular/router';

const ROUTES = [{ path: '', component: GroupsComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule],
  declarations: []
})
export class GroupsRoutingModule {
}
