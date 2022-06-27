import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../utils/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  @Input() user!: string;
  @Input() inactiveUserId!: number;
  // @Output() userSetToActive = new EventEmitter<number>();

  onSetToActive() {
    // this.userSetToActive.emit(id);
    this.users.setToActive(this.inactiveUserId);
  }

  constructor(private users: UsersService) {}
}
