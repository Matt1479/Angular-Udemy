import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../utils/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  user!: string;
  activeUserId!: number;
  // @Output() userSetToInactive = new EventEmitter<number>();

  activeUsers!: Array<string>;

  ngOnInit(): void {
    this.activeUsers = this.users.activeUsers;
  }

  onSetToInactive() {
    // this.userSetToInactive.emit(id);
    this.users.setToinActive(this.activeUserId);
  }

  constructor(private users: UsersService) {}
}
