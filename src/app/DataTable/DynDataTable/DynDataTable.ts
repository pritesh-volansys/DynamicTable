import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { ColumnConfig } from "../ColumnConfig";



@Component({
  selector: 'app-DataTable',
  templateUrl: './DynDataTable.html',
  styleUrls: ['./DynDataTable.css'],
})
export class DynDataTableComponent implements OnInit {
  @Input() dataSource: any[];
  @Input() option: any[];
  @Input() sort: any;
  Filtterby = "";
  field = ""; 
  
  public ColumnSets: ColumnConfig[];

  constructor() { }

  ngOnInit() {
    this.option;
  }

  onChangeFiltterValue(event , field){ 
    this.Filtterby = event.target.value;
    this.field = field;
  }

  // selectedClass(columnName): string{
  //   return columnName == this.sort.column ? 'sort-' + this.sort.descending : false;
  // }

  onChangeSortingType(columnName): void{
    var sort = this.sort;
    if (sort.column == columnName) {
      sort.descending = !sort.descending;
    } else {
      sort.column = columnName;
      sort.descending = false;
    }
  }
  
  convertSortingType(): string{
    return this.sort.descending ? '-' + this.sort.column : this.sort.column;
  }

}
