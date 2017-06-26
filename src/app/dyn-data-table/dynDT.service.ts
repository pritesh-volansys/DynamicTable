import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ColumnSetting } from "app/dyn-data-table/dyn-column-data.model";
import { Subject } from "rxjs/Subject";

@Injectable()
export class DynDataTableService {
    DataSource = [];
    HeaderSource: ColumnSetting[] ;
    ChangeContain = new Subject<string>();

    constructor() { }


    SetDataSources(dsDataTabel){
        this.DataSource = dsDataTabel;        
    }

    getDataSources() {
        return this.DataSource;
    }

    SetHeaderDT(cmlData : ColumnSetting[]){
        this.HeaderSource =  cmlData; 
        this.ChangeContain.next("Changed");
    }

    GetHeaderDT(){
        return this.HeaderSource; 
    }
}
