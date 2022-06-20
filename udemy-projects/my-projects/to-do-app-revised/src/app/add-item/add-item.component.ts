import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  @Output('clickToCreateAnItem') itemCreated = new EventEmitter<Item>();
  @Output() cardCreated = new EventEmitter<Item>();

  newItemName!: string;
  newItemContent!: string;

  itemsArr: Array<Item> = [];

  constructor() {}

  ngOnInit(): void {}

  onAddItem() {
    this.itemCreated.emit({
      name: this.newItemName,
      content: this.newItemContent,
    });
  }

  onAddCard() {
    this.cardCreated.emit({
      name: this.newItemName,
      content: this.newItemContent,
    });
    // this.itemsArr.push({
    //   type: 'card',
    //   name: this.newItemName,
    //   content: this.newItemContent,
    // });
  }
}
