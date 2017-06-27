import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


import { DynDataTableComponent } from "./DataTable/DynDataTable/DynDataTable";
import { DataTableModule } from "./DataTable/DataTable.module";
import { DemoTemplateComponent } from "./DemoDataTemplate/DemoTemplate.component";

@NgModule({
  declarations: [
    AppComponent,
    DemoTemplateComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTableModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
