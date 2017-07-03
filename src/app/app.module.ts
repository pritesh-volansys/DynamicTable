import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { DataTableModule } from "./DataTable/DataTable.module";
import { DemoTemplateComponent } from "./DemoTemplate/DemoTemplate.component";
import { GetFirebaseDetailService } from "./DemoTemplate/GetFirebaseDetail.service";
import { DailogComponent } from './DemoTemplate/dailog/dailog.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoTemplateComponent,
    DailogComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DataTableModule
  ],
  providers:[GetFirebaseDetailService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
