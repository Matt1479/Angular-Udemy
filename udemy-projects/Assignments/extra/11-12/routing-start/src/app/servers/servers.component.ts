import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,

    // ActivatedRoute injects the currently active route,
    // so for the component you just loaded,
    // this (ActivatedRoute) will be the route which loaded this component

    // and the route is basically a JavaScript object,
    // which holds a lot of metadata about current route
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // relativeTo - define relative to which route this link should be loaded,
    // by default this is always the root domain
    // this.router.navigate(['servers'], { relativeTo: this.route });
    // so this will navigate to localhost:4200/servers/servers
  }
}
