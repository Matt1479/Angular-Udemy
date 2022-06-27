import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
// import { LoggingService } from './utils/logging.service';
// import { AccountsService } from './utils/accounts.service';

@NgModule({
  declarations: [AppComponent, AccountComponent, NewAccountComponent],
  imports: [BrowserModule, FormsModule],
  // providers: [LoggingService, AccountsService], // no need if you use providedIn: 'root'
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
