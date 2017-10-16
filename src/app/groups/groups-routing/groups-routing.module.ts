import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from '../groups.component';
import { RouterModule } from '@angular/router';
import { GroupsListComponent } from '../groups-list/groups-list.component';
import { GroupsFormComponent } from '../groups-form/groups-form.component';

const ROUTES = [
  {
    path: '', component: GroupsComponent, children:
    [
      { path: '', component: GroupsListComponent },
      { path: 'new', component: GroupsFormComponent }

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
