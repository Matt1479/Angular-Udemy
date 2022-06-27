import { Injectable } from '@angular/core';
import { Card } from './card.model';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  itemStorage: Array<Card> = [
    {
      name: 'Card',
      content: 'test card 1',
      colour: 'red',
    },
    {
      name: 'Card',
      content: 'test card 2',
      colour: 'green',
    },
    {
      name: 'Card',
      content: 'test card 3',
      colour: 'blue',
    },
  ];

  addNewItem(name: string, content: string, colour: string) {
    this.itemStorage.push({
      name: name,
      content: content,
      colour: colour,
    });
    this.logger.log(this.itemStorage);
  }

  updateItem(id: number, colour: string) {
    this.itemStorage[id].colour = colour;
  }

  deleteItem(id: number) {
    this.logger.deleteLog(this.itemStorage[id].name);
    this.itemStorage.splice(id, 1);
  }

  constructor(private logger: LoggerService) {}
}
