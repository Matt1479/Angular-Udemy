import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { DisplayItemComponent } from './display-item/display-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AddItemComponent, DisplayItemComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
