import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.css'],
})
export class DisplayItemComponent implements OnInit {
  @Input('singleItem') item!: Item;

  constructor() {}

  ngOnInit(): void {}
}
