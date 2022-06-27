import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../utils/dataStorage.service';
import { LoggerService } from '../utils/logger.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  constructor(private dataStorage: DataStorageService) {}

  ngOnInit(): void {}

  onAddItem(itemName: string, colour: string) {
    // console.log({ name: itemName, value: colour });
    this.dataStorage.addItem({ name: itemName, value: colour });
  }
}
