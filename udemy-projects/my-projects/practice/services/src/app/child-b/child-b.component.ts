import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../utils/card.model';
import { DataStorageService } from '../utils/data-storage.service';
import { LoggerService } from '../utils/logger.service';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css'],
})
export class ChildBComponent implements OnInit {
  @Input() card!: Card;
  @Input() id!: number;

  constructor(
    private logger: LoggerService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {}

  onSetColour(cardColour: string) {
    this.logger.updateLog(cardColour);
    this.logger.log(this.id);

    this.dataStorageService.updateItem(this.id, cardColour);
  }

  onDeleteCard() {
    this.dataStorageService.deleteItem(this.id);
  }
}
