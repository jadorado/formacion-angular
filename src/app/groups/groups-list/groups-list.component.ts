import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups.service';
import { Group } from '../group';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {

  concerts: Group[];
  headings = ['#', 'Nombre', 'Género', 'Miembros'];
  fields = ['id', 'name', 'genre', 'members'];

  constructor(private groupsService: GroupsService) { }

  ngOnInit() {
    this.groupsService.getGroups().subscribe(concerts => this.concerts = concerts);
  }

}
