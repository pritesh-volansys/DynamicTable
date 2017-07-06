import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { HttpCallService } from './HttpCall.service';
import { DynDataTableComponent } from './DynDataTable/DynDataTable.component';
import { FillterColumns } from './FillterColumns.pipe';
import { OrderbyColumns } from './OrderbyColumns.pipe';
import { ShortenColumnVal } from './ShortenColumnVal.pipe';
import { DailogComponent } from './dailog/dailog.component';

@NgModule({
    declarations: [
        DynDataTableComponent,
        FillterColumns,
        OrderbyColumns,
        ShortenColumnVal,
        DailogComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [HttpCallService],
    exports: [DynDataTableComponent]
})

export class DataTableModule {}
