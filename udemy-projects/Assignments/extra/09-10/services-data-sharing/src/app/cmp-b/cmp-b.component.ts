import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../utils/data-storage.service';
import { ElementItem } from '../utils/element.model';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css'],
})
export class CmpBComponent implements OnInit {
  elements: ElementItem[] = [];

  constructor(private dataStorage: DataStorageService) {}

  ngOnInit(): void {
    // get elements
    this.elements = this.dataStorage.getElements();

    // subscribe - listen to changes
    this.dataStorage.elementsChanged.subscribe(() => {
      this.elements = this.dataStorage.compBElements;
    });
  }

  moveToA(id: number) {
    this.dataStorage.moveToA(id);
  }
}
