import { Component, OnInit } from '@angular/core';
import { Card } from './utils/card.model';
import { DataStorageService } from './utils/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cards: Array<Card> = [];

  title = 'services';

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit() {
    this.cards = this.dataStorageService.itemStorage;
  }
}
