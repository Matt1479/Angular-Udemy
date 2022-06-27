import { Component, OnInit } from '@angular/core';
import { UsersService } from './utils/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  activeUsers!: Array<string>;
  inactiveUsers!: Array<string>;

  constructor(private users: UsersService) {}

  ngOnInit(): void {
    this.activeUsers = this.users.activeUsers;

    this.inactiveUsers = this.users.inactiveUsers;
  }

  // onSetToInactive() {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive() {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }
}
