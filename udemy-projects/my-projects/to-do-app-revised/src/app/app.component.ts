import { Component } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'to-do-app-revised';

  itemsArr: Array<Item> = [
    {
      type: 'item',
      name: 'test item',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus tortor non sapien eleifend mollis. Fusce id luctus tortor. Mauris congue, risus non pellentesque rutrum, arcu eros fringilla massa, a dapibus ipsum velit scelerisque nisi.',
    },
    {
      type: 'card',
      name: 'test card',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus tortor non sapien eleifend mollis. Fusce id luctus tortor. Mauris congue, risus non pellentesque rutrum, arcu eros fringilla massa, a dapibus ipsum velit scelerisque nisi.',
    },
  ];

  onItemAdded(itemData: Item) {
    this.itemsArr.push({
      type: 'item',
      name: itemData.name,
      content: itemData.content,
    });
  }

  onCardAdded(cardData: Item) {
    this.itemsArr.push({
      type: 'card',
      name: cardData.name,
      content: cardData.content,
    });
  }
}
