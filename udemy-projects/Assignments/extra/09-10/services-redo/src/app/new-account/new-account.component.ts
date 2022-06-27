import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../utils/accounts.service';
// import { LoggingService } from '../utils/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // #2 Add it to providers (Warning: Overwriting the instance!)
  // providers: [LoggingService, AccountsService],
})
export class NewAccountComponent implements OnInit {
  // #1 DI (Service Injection)
  constructor(
    // private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  ngOnInit(): void {
    // receive an event from ComponentA to ComponentB
    // listen to an event & throw an alert
    this.accountsService.statusUpdated.subscribe((status: string) =>
      alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // #3 Use the Service
    // this.loggingService.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
