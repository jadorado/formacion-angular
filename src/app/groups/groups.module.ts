import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from './groups.component';
import { GroupsRoutingModule } from './groups-routing/groups-routing.module';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { GroupsService } from './groups.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    GroupsRoutingModule,
    SharedModule
  ],
  declarations: [GroupsComponent, GroupsListComponent],
  providers: [GroupsService]
})
export class GroupsModule { }
