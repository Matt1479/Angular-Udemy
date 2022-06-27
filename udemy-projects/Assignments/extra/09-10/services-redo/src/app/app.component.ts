import { Component, OnInit } from '@angular/core';
import { AccountsService } from './utils/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // #2 provide (create new instance, or not)
  // providers: [AccountsService],
})
export class AppComponent implements OnInit {
  accounts: Array<{ name: string; status: string }> = [];
  // #1 DI
  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
}
