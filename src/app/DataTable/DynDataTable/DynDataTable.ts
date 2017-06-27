import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { ColumnConfig } from "../ColumnConfig";
import { DataStorageService } from "../DataStorage.service";
import { Response } from '@angular/http';

@Component({
  selector: 'app-DataTable',
  templateUrl: './DynDataTable.html',
})
export class DynDataTableComponent implements OnInit {
  @Input() dataSource: any[];
  @Input() option: any[];
  @Input() sort: any;
  @Input() dataLink: string;
  filtterby = "";
  fieldName = ""; 

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.getLinkData(this.dataLink)
      .subscribe(
        (servers: any[]) => this.dataSource = servers,
        (error) => console.log(error)
      );    
    this.option;
  }

  onChangeFiltterValue(event , field){ 
    this.filtterby = event.target.value;
    this.fieldName = field;
  }

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
