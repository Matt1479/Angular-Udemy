import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../utils/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  @Input() user!: string;
  @Input() activeUserId!: number;
  // @Output() userSetToInactive = new EventEmitter<number>();

  onSetToInactive() {
    // this.userSetToInactive.emit(id);
    this.users.setToinActive(this.activeUserId);
  }

  constructor(private users: UsersService) {}
}
