import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  itemArr: Item<string, string>[] = [
    {
      name: 'Test Item 0',
      value: 'green',
    },
  ];

  addItem(item: Item<string, string>) {
    this.logger.onCreateItem(item.name);
    this.logger.onColourAssign(item.value);
    this.itemArr.push(item);
  }

  deleteItem(id: number) {
    this.itemArr.splice(id, 1);
    this.logger.onDeleteItem(id);
  }

  updateItemColour(colour: string, id: number) {
    this.logger.onColourUpdate(colour, id);
    this.itemArr[id].value = colour;
  }

  constructor(private logger: LoggerService) {}
}
