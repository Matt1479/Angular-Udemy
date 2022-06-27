import { Component } from '@angular/core';
import { DataStorageService } from './utils/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'services-data-sharing';

  constructor(private dataStorage: DataStorageService) {}

  logChanges() {
    this.dataStorage.logItems();
  }
}
