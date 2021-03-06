import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    '../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './app.component.css',
  ],
})
export class AppComponent {
  serverElements: Array<any> = [
    {
      type: 'server',
      name: 'testserver',
      content: 'just a test',
    },
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
