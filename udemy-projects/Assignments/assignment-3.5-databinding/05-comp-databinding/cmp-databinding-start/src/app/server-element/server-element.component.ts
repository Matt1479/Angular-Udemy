import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit {
  // Exposing data from this component, so the parent component will be able to use it
  @Input('srvElement') element!: {
    type: string;
    name: string;
    content: string;
  };

  constructor() {}

  ngOnInit(): void {}
}
