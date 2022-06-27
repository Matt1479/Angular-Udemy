import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../utils/data-storage.service';
import { ElementItem } from '../utils/element.model';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css'],
})
export class CmpAComponent implements OnInit {
  elements: ElementItem[] = [];

  constructor(private dataStorage: DataStorageService) {}

  ngOnInit(): void {
    // get elements
    this.elements = this.dataStorage.getElements();

    // subscribe - listen to changes
    this.dataStorage.elementsChanged.subscribe(() => {
      this.elements = this.dataStorage.compAElements;
    });
  }

  moveToB(id: number) {
    this.dataStorage.moveToB(id);
  }
}
