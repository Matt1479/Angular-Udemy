import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CmpAComponent } from './cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-b/cmp-b.component';

@NgModule({
  declarations: [
    AppComponent,
    CmpAComponent,
    CmpBComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
