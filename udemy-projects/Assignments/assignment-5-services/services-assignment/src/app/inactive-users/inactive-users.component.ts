import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../utils/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  user!: string;
  inactiveUserId!: number;
  // @Output() userSetToActive = new EventEmitter<number>();

  inactiveUsers!: Array<string>;

  ngOnInit(): void {
    this.inactiveUsers = this.users.inactiveUsers;
  }

  onSetToActive() {
    // this.userSetToActive.emit(id);
    this.users.setToActive(this.inactiveUserId);
  }

  constructor(private users: UsersService) {}
}
