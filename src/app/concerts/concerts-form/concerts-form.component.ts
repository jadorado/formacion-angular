import { Component, OnInit } from '@angular/core';
import { Concert } from '../concert';

@Component({
  selector: 'app-concerts-form',
  templateUrl: './concerts-form.component.html',
  styleUrls: ['./concerts-form.component.scss']
})
export class ConcertsFormComponent implements OnInit {

  concert: Concert = {
    id: null,
    name: null,
    city: null,
    venue: null,
    group: null
  };

  constructor() { }

  ngOnInit() { }

  submit() {
    console.log(this.concert);
  }
}
