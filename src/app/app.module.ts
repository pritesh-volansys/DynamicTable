import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { DynDTComponent } from './dyn-data-table/dyn-dt/dyn-dt.component';
import { StudentDetailComponent } from "app/student/student-detail/student-detail.component";
import { FilterPipe } from "app/dyn-data-table/dyn-filtter.pipe";
import { OrderBy } from "app/dyn-data-table/dyn-orderby.pipe";
import { ShortenPipe } from "app/dyn-data-table/dyn-dt-shorten.pipe";

@NgModule({
  declarations: [
    AppComponent,
    DynDTComponent,
    StudentDetailComponent,
    FilterPipe,
    OrderBy,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
