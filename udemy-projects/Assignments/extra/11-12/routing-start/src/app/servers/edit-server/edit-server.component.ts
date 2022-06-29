import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  server!: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(
    private serversService: ServersService,
    // #1 DI
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // retrieve Query Parameters & Fragment
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    // note: this might bring the same problem as with Params
    // meaning this is only ran/updated at the time this component is created

    // the alternative - subscribing to queryParams/fragment
    // this will allow you to react to queryParams/fragment changes, update them etc.
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    });
    this.route.fragment.subscribe();
    // you do not need to unsubscribe() in this case - Angular will do it for you

    this.server = this.serversService.getServer(1)!;
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}
