import { Component, Input } from '@angular/core';
import { AccountsService } from '../utils/accounts.service';
// import { LoggingService } from '../utils/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // #2 Add it to providers (Warning: Overwriting the instance!!)
  // providers: [LoggingService, AccountsService],
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;

  // #1 DI
  constructor(
    // private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // #3 Use the Service
    // this.loggingService.logStatusChange(status);
    // console.log('A server status changed, new status: ' + status);

    // emit an event from ComponentA
    this.accountsService.statusUpdated.emit(status);
  }
}
