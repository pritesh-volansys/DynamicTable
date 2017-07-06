import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { DataTableModule } from './DataTable/DataTable.module';
import { DemoTemplateComponent } from './DemoTemplate/DemoTemplate.component';
import { GetFirebaseDetailService } from './DemoTemplate/GetFirebaseDetail.service';


@NgModule({
  declarations: [
    AppComponent,
    DemoTemplateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DataTableModule
  ],
  providers: [GetFirebaseDetailService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
