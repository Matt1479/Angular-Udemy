import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'simple to-do app';

  itemTitle: string = '';
  itemContent: string = '';

  indexOfItem!: number;

  items: Array<any> = [];

  constructor() {}

  // onContentUpdate(event: Event) {
  //   this.itemContent = (<HTMLInputElement>event.target).value;
  // }

  addItem() {
    if (this.itemTitle === '' || this.itemContent === '') return;
    this.items.push({
      title: this.itemTitle,
      content: this.itemContent,
    });
  }

  deleteItem(item: any) {
    let index = this.items.indexOf(item);

    this.items.splice(index, 1);

    // this.items.splice(this.items.indexOf(item), this.items.indexOf(item) + 1);
  }

  // updateItem(item: any) {
  // let index = this.items.indexOf(item);
  // console.log(index);
  // }
}
