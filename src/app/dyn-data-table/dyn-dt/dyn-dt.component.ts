import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { ColumnSetting } from "app/dyn-data-table/dyn-column-data.model";

@Component({
  selector: 'app-dyn-dt',
  templateUrl: './dyn-dt.component.html',
  styleUrls: ['./dyn-dt.component.css'],
})
export class DynDTComponent implements OnInit {
  @Input() DataSource: any[];
  @Input() Option: any[];
  @Input() sort: any;
  Filtterby = "";
  field = ""; 
  

  title = 'app';
  public DynDataSource = [];
  public filteredList = [];
  public ColumnSets: ColumnSetting[];
  public keys: string[];
  private subscription: Subscription;


  constructor() { }

  ngOnInit() {
    this.Option;
  }

  onChangeFiltter(event , field){ 
    this.Filtterby = event.target.value;
    this.field = field;
  }

  // selectedClass(columnName): string{
  //   return columnName == this.sort.column ? 'sort-' + this.sort.descending : false;
  // }

  changeSorting(columnName): void{
    var sort = this.sort;
    if (sort.column == columnName) {
      sort.descending = !sort.descending;
    } else {
      sort.column = columnName;
      sort.descending = false;
    }
  }
  
  convertSorting(): string{
    return this.sort.descending ? '-' + this.sort.column : this.sort.column;
  }

}
