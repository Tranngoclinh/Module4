import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componer1Component } from './componer1/componer1.component';
import { StaffComponent } from './staff/staff.component';
import { StaffAddComponent } from './staff-add/staff-add.component';

@NgModule({
  declarations: [
    AppComponent,
    Componer1Component,
    StaffComponent,
    StaffAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
