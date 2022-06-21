import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: [
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './server-element.component.css',
  ],
  // encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent implements OnInit {
  @Input('ele') element!: { type: string; name: string; content: string };

  constructor() {}

  ngOnInit(): void {}
}
