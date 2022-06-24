import { Component } from '@angular/core';
import { AccountsService } from '../utils/accounts.service';
import { LoggingService } from '../utils/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // #2 add to providers (Careful! You're overwriting the instance)
  // providers: [LoggingService],
})
export class NewAccountComponent {
  // bind it to a property by using TS shortcut of adding an accessor in from of the name of an argument
  // to instantly create a property with the same name and bind a value to it
  // the type has to be the class you want to get injected
  constructor(
    // #1 inject
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus); // #3 instantiate
    // this.loggingService.logStatusChange(accountStatus);
  }
}
