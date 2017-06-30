import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { ColumnConfig } from "../ColumnConfig";
import { HttpCallService } from "../HttpCall.service";

enum dataType {
  "date" = 0,
  "string" = 1,
  "number" = 2,
  "boolean" = 3,
  "float" = 4,
  "double" = 5
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
  dataTypeOptions: dataType;  
  isEditIndex;
  isValidStatus = false;
  alterMessage; 
  isAlterVisible = false;  
  

  ngOnChanges(changes: any) {
    if (this.dataSource != null && this.dataSource != undefined && this.dataSource.Url != null && this.dataSource.Url != undefined) {
      this.httpCallService.getLinkData(this.dataSource)
        .subscribe(
        (servers: any[]) => this.dataSource = servers,
        (error) => console.log(error)
        );
      this.isAlterVisible = true;
    }
    else {
      this.isAlterVisible = false;
    }
  }

  constructor(private httpCallService: HttpCallService) { }

  ngOnInit() {
    this.option;
    this.httpResponce();
    this.isAlterVisible = false;
  }

  httpResponce() {
    this.httpCallService.responseMessage.subscribe(
      (httpMessage: string) => {
        if (httpMessage == "Unauthorized") {
          this.onHideMessage(); 
          this.isValidStatus = false;
          this.alterMessage = "Invalid authorization header. The access token you're using is either expired or invalid.";
        }
        else if (httpMessage == "OK") {
          this.onHideMessage(); 
          this.isValidStatus = true;
          this.alterMessage = "You have successfully get the data.";
        }
        else {
          this.onHideMessage(); 
          this.isValidStatus = false;
          this.alterMessage = httpMessage + "!";
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

  onEdit(index) {
    this.isEditIndex = index;     
  }

  onSave(rowIndex) {    
    for (var i = 0; i < this.option.length; i++) {
      var textID = this.option[i].field + '_' + rowIndex;
      if ((<HTMLInputElement>document.getElementById(textID)).value != null 
      && (<HTMLInputElement>document.getElementById(textID)).value.length > 0 && (<HTMLInputElement>document.getElementById(textID)).value != undefined) {             
      }
      else{
        this.onHideMessage();        
        this.isValidStatus = false;
        this.alterMessage = "Please fill the require field."        
        return;
      } 
    }
    for (var i = 0; i < this.option.length; i++) {
      var textID = this.option[i].field + '_' + rowIndex;
      if ((<HTMLInputElement>document.getElementById(textID)).value != null) {
        this.dataSource[rowIndex][this.option[i].field] = (<HTMLInputElement>document.getElementById(textID)).value;        
      }      
    }

    this.onHideMessage();    
    this.isValidStatus = true;
    this.alterMessage = "Sucessfully save data!"
    this.isEditIndex = null;
  }

  onDelete(rowIndex) {

    var isConfirmed = confirm("Are you sure to delete this record ?");
      if(isConfirmed){
       this.dataSource.splice(rowIndex, 1);
      }else{
        return false;
      }
  }

  onHideMessage(){
    this.isAlterVisible = true;
    Observable.interval(2000)
          .take(10).map((x) => x+1)
          .subscribe((x) => {            
            this.isAlterVisible = false;
          })
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
