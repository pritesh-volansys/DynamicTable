import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { DataStorageService } from "./DataStorage.service";
import { DynDataTableComponent } from "./DynDataTable/DynDataTable";
import { FillterColumns } from "./FillterColumns.pipe";
import { OrderbyColumns } from "./OrderbyColumns.pipe";
import { ShortenColumnVal } from "./ShortenColumnVal.pipe";

@NgModule({
    declarations: [
        DynDataTableComponent,
        FillterColumns,
        OrderbyColumns,
        ShortenColumnVal
    ],
    imports: [                
        CommonModule,
        FormsModule,
        HttpModule
    ],
    providers: [DataStorageService],
    exports: [DynDataTableComponent]
})

export class DataTableModule { }