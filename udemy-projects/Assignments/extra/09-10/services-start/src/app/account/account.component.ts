import { Component, Input, OnInit } from '@angular/core';
import { AccountsService } from '../utils/accounts.service';
import { LoggingService } from '../utils/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // #2 add it to providers (Careful! You're overwriting the instance)
  // providers: [LoggingService],
})
export class AccountComponent implements OnInit {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;

  // #1 inject a service
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  ngOnInit(): void {
    // subscribing to an observable is equivalent to adding an event listener
    // EventEmitter wraps an observable
    this.accountsService.statusUpdated.subscribe((status: string) =>
      alert('New Status: ' + status)
    );
  }

  onSetTo(status: string) {
    // #3 Instantiate/call it
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);

    this.accountsService.statusUpdated.emit(status);
  }
}
