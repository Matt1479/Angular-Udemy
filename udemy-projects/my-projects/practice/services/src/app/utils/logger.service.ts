import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log<T>(msg: T) {
    console.log(msg);
  }

  newLog(c: string) {
    console.log('The colour has been assigned: ' + c);
  }

  updateLog(c: string) {
    console.log('The colour has been changed, the new colour is: ' + c);
  }

  deleteLog<T>(item: T) {
    console.log('The ' + item + ' element has been destroyed');
  }

  constructor() {}
}
