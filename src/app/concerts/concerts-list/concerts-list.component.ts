import { Component, OnInit } from '@angular/core';
import { ConcertsService } from '../concerts.service';
import { Concert } from '../concert';

@Component({
  selector: 'app-concerts-list',
  templateUrl: './concerts-list.component.html',
  styleUrls: ['./concerts-list.component.scss']
})
export class ConcertsListComponent implements OnInit {

  concerts: Concert[];
  headings = ['#', 'Grupo', 'Nombre', 'Ciudad', 'Sede'];
  fields = ['id', 'group', 'name', 'city', 'venue'];

  constructor(private concertsService: ConcertsService) { }

  ngOnInit() {
    this.concertsService.getConcerts().subscribe(concerts => this.concerts = concerts);
  }

}
