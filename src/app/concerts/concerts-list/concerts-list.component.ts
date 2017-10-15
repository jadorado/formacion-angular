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

  constructor(private concertsService: ConcertsService) { }

  ngOnInit() {
    this.concertsService.getConcerts().subscribe(concerts => {
      console.log(concerts);
    });
  }

}
