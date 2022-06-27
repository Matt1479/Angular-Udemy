import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { DisplayItemComponent } from './display-item/display-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    DisplayItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
