import { DoCheck, EventEmitter, Injectable } from '@angular/core';
import { ElementItem } from './element.model';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  elementsChanged = new EventEmitter<ElementItem[]>();

  compAElements: ElementItem[] = [
    {
      name: 'Book',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non lorem dignissim, venenatis elit sed, porttitor lorem.',
    },
    {
      name: 'Apple',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non lorem dignissim, venenatis elit sed, porttitor lorem.',
    },
  ];

  compBElements: ElementItem[] = [
    {
      name: 'A bottle of water',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non lorem dignissim, venenatis elit sed, porttitor lorem.',
    },
    {
      name: 'A cup of coffee',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non lorem dignissim, venenatis elit sed, porttitor lorem.',
    },
  ];

  constructor(private logger: LoggerService) {}

  getElements() {
    return this.compAElements.slice();
  }

  moveToA(id: number) {
    // push from A to B
    this.compAElements.push(this.compBElements[id]);

    // remove the "moved" element
    this.compBElements.splice(id, 1);

    // Pass the updated arrays
    this.elementsChanged.emit(this.compAElements.slice());
    this.elementsChanged.emit(this.compBElements.slice());
  }

  moveToB(id: number) {
    // push from B to A
    this.compBElements.push(this.compAElements[id]);

    // remove the "moved" element
    this.compAElements.splice(id, 1);

    // Pass the updated arrays
    this.elementsChanged.emit(this.compAElements.slice());
    this.elementsChanged.emit(this.compBElements.slice());
  }

  logItems() {
    this.logger.logElements(this.compAElements, this.compBElements);
  }
}
