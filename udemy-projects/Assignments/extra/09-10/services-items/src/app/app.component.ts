import { Component } from '@angular/core';
import { DataStorageService } from './utils/dataStorage.service';
import { Item } from './utils/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'qsp';

  items: Item<string, string>[] = [];

  constructor(private dataStorage: DataStorageService) {}

  ngOnInit(): void {
    this.items = this.dataStorage.itemArr;
  }
}
