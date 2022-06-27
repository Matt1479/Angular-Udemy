import { Component, Input, OnInit } from '@angular/core';
import { DataStorageService } from '../utils/dataStorage.service';
import { Item } from '../utils/item.model';

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.css'],
})
export class DisplayItemComponent implements OnInit {
  @Input() item!: Item<string, string>;
  @Input() id!: number;

  constructor(private dataStorage: DataStorageService) {}

  ngOnInit(): void {}

  onDeleteItem() {
    this.dataStorage.deleteItem(this.id);
  }

  onSetColor(colour: string) {
    this.dataStorage.updateItemColour(colour, this.id);
  }
}
