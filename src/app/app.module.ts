import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';



import { OrderbyColumns } from "./DataTable/OrderbyColumns.pipe";
import { FillterColumns } from "./DataTable/FillterColumns.pipe";
import { ShortenColumnVal } from "./DataTable/ShortenColumnVal.pipe";
import { DynDataTableComponent } from "./DataTable/DynDataTable/DynDataTable";
import { DemoTemplateComponent } from "./DemoTemplate/DemoDataTemplate/DemoTemplate.component";



@NgModule({
  declarations: [
    AppComponent,
    DynDataTableComponent,
    DemoTemplateComponent,
    FillterColumns,
    OrderbyColumns,
    ShortenColumnVal
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
