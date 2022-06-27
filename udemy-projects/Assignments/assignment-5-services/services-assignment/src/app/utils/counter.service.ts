import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  activeToInactive: number = 0;
  inactiveToActive: number = 0;

  incrementActive() {
    this.activeToInactive++;
    console.log(
      'Number of active -> inactive actions: ' + this.activeToInactive
    );
  }

  incrementInactive() {
    this.inactiveToActive++;
    console.log(
      'Number of inactive -> active actions: ' + this.inactiveToActive
    );
  }

  constructor() {}
}
