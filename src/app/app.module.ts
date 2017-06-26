import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynDTComponent } from './dyn-data-table/dyn-dt/dyn-dt.component';
import { DynDataTableService } from "app/dyn-data-table/dynDT.service";
import { StudentDetailComponent } from "app/student/student-detail/student-detail.component";
import { FilterPipe } from "app/dyn-data-table/dyn-filtter.pipe";
import { OrderBy } from "app/dyn-data-table/dyn-orderby.pipe";

@NgModule({
  declarations: [
    AppComponent,
    DynDTComponent,
    StudentDetailComponent,
    FilterPipe,
    OrderBy
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DynDataTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
