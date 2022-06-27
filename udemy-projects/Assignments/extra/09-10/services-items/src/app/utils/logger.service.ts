import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log<T>(message: T) {
    console.log(message);
  }

  onCreateItem(itemName: string) {
    console.log('Created an item: ' + itemName);
  }

  onDeleteItem(itemId: number) {
    console.log('Deleted an item with id/index of: ' + itemId);
  }

  onColourAssign(colour: string) {
    console.log('Assigned the colour ' + colour + ' of an item');
  }

  onColourUpdate(colour: string, id: number) {
    console.log(
      'Updated the colour of an item with id/index of ' + id + ' to: ' + colour
    );
  }

  constructor() {}
}
