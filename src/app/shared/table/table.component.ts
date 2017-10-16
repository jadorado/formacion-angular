import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() headings: string[];
  @Input() fields: string[];
  @Input() data: any[];
  @Output() onRowClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  onClick(row: any) {
    this.onRowClicked.emit(row['id']);
  }
}
