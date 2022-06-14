import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './SuccessAlert/SuccessAlert.component';
import { WarningAlertComponent } from './WarningAlert/WarningAlert.component';
import { NestingComponent } from './nesting/nesting.component';

@NgModule({
  declarations: [AppComponent, WarningAlertComponent, SuccessAlertComponent, NestingComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
