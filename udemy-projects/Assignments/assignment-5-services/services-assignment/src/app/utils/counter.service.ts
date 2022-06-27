import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  activeUsers: number = 0;
  inactiveUsers: number = 0;

  countActive() {
    this.activeUsers++;
    console.log('Number of active -> inactive actions: ' + this.activeUsers);
  }

  countInactive() {
    this.inactiveUsers++;
    console.log('Number of inactive -> active actions: ' + this.inactiveUsers);
  }

  constructor() {}
}
