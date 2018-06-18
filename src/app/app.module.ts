import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxPivotTableModule } from './ngx-pivot-table/ngx-pivot-table.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPivotTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
