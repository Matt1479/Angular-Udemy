import { Component, OnInit } from '@angular/core';
import { Card } from '../utils/card.model';
import { DataStorageService } from '../utils/data-storage.service';
import { LoggerService } from '../utils/logger.service';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css'],
})
export class ChildAComponent implements OnInit {
  // old comments - figuring it out
  // cards: Array<Card> = [
  //   {
  //     name: 'Card',
  //     content: 'test card',
  //     colour: 'green',
  //   },
  // ];

  // #1 DI
  constructor(
    private logger: LoggerService,
    private cards: DataStorageService
  ) {}

  ngOnInit(): void {
    // this.cards = this.storage.itemStorage;
  }

  onCreateCard(cardName: string, cardContent: string, cardColour: string) {
    // console.log(cardName, cardContent, cardColour);
    // this.cards.push({
    //   name: cardName,
    //   content: cardContent,
    //   colour: cardColour,
    // });
    // console.log(this.cards);

    this.cards.addNewItem(cardName, cardContent, cardColour);
    this.logger.newLog(cardColour);
  }
}
