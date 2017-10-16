import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from '../groups.component';
import { RouterModule } from '@angular/router';
import { GroupsListComponent } from '../groups-list/groups-list.component';

const ROUTES = [
  {
    path: '', component: GroupsComponent, children:
    [
      { path: '', component: GroupsListComponent }
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
export class GroupsRoutingModule {
}
