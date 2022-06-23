import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nested-data';
  rootData = 'test data';

  getData(data: ElementRef) {
    console.log('AppComponent got data from childOne: ' + data);
    console.log("AppComponent/rootComponent's data: " + this.rootData);
  }
}
