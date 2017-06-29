import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { Response } from '@angular/http';

import { ColumnConfig } from "../ColumnConfig";
import { HttpCallService } from "../HttpCall.service";

enum dataType {
  "date" = 0,
  "string" = 1,
  "number" = 2,
  "boolean" = 3,
  "float"= 4,
  "double"= 5
}

@Component({
  selector: 'app-DataTable',
  templateUrl: './DynDataTable.html',
  styleUrls: ['./DynDataTable.style.css']
})


export class DynDataTableComponent implements OnInit {
  @Input() dataSource: any;
  @Input() option: any[];
  @Input() sort: any;
  @ViewChild('clmRef') clmRef: ElementRef;

  filtterby = "";
  fieldName = "";
  httpResponseMsg = "";
  httpStatus;
  ishttpData = false;
  dataTypeOptions: dataType;

  ngOnChanges(changes: any) {
    if (this.dataSource != null && this.dataSource != undefined && this.dataSource.Url != null && this.dataSource.Url != undefined) {
      this.httpCallService.getLinkData(this.dataSource)
        .subscribe(
        (servers: any[]) => this.dataSource = servers,
        (error) => console.log(error)
        );
      this.ishttpData = true;
    }
    else {
      this.ishttpData = false;
    }
  }

  constructor(private httpCallService: HttpCallService) { }

  ngOnInit() {
    this.option;
    this.httpResponce();
  }

  httpResponce() {
    this.httpCallService.responseMessage.subscribe(
      (httpMessage: string) => {
        if (httpMessage == "Unauthorized") {
          this.httpStatus = false;
          this.httpResponseMsg = "Invalid authorization header. The access token you're using is either expired or invalid.";
        }
        else if (httpMessage == "OK") {
          this.httpStatus = true;
          this.httpResponseMsg = "You have successfully get the data.";
        }
        else {
          this.httpStatus = false;
          this.httpResponseMsg = httpMessage + "!";
        }
      }
    );
  }

  onChangeFiltterValue(event, field) {
    this.filtterby = event.target.value;
    this.fieldName = field;
  }

  onChangeSortingType(columnName): void {
    var sort = this.sort;
    if (sort.column == columnName) {
      sort.descending = !sort.descending;
    } else {
      sort.column = columnName;
      sort.descending = false;
    }
  }

  convertSortingType(): string {
    return this.sort.descending ? '-' + this.sort.column : this.sort.column;
  }

  onclick(test) {
    var type = typeof test;
    var datatype = this.OnSelectType(type);
  }

  currentType: dataType;

  OnSelectType(type) {
    debugger;
    switch (type) {
      case dataType.string.toString():
        this.dataTypeOptions = dataType.string;
        break;
      case dataType.number.toString():
        this.dataTypeOptions = dataType.number;
        break;
      case dataType.boolean.toString():
        this.dataTypeOptions = dataType.boolean;
        break;
      case dataType.date.toString():
        this.dataTypeOptions = dataType.date;
        break;
      default:
        this.dataTypeOptions = dataType.string;
        break;
    }
  }

}
