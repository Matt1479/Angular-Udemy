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

  updating = false;

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
    this.itemTitle = '';
    this.itemContent = '';
  }

  onDelete(item: any) {
    let index = this.items.indexOf(item);

    this.items.splice(index, 1);

    // this.items.splice(this.items.indexOf(item), this.items.indexOf(item) + 1);
  }

  onEdit(item: any) {
    this.updating = true;
    let index = this.items.indexOf(item);
    console.log(index);

    this.itemTitle = this.items[index].title;
    this.itemContent = this.items[index].content;

    this.indexOfItem = index;
  }

  onUpdate() {
    if (this.itemTitle === '' || this.itemContent === '') return;

    // this.items.push({
    //   title: this.itemTitle,
    //   content: this.itemContent,
    // });

    this.itemTitle = this.items[this.indexOfItem].title;

    console.log(
      this.indexOfItem,
      this.items[this.indexOfItem].title,
      this.itemTitle
    );
    this.itemTitle = '';
    this.itemContent = '';
    this.updating = false;
  }
}
