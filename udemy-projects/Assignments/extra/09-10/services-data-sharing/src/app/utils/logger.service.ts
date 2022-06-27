import { Injectable } from '@angular/core';
import { ElementItem } from './element.model';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  logElements(a: ElementItem[], b: ElementItem[]) {
    console.log(a, b);
  }

  constructor() {}
}
