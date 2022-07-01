import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server!: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    // #1 DI
    private route: ActivatedRoute,
    private router: Router
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

    let id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id)!;
    // Subscribe to route params to update the id if params changed
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    // this.route.queryParams.subscribe((updatedParams: Params) => {
    //   id = +updatedParams['id'];
    // });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    // after changes have been saved, navigate away - go up one level to the last loaded server
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    // this code will be run whenever the canActivate guard is checked by Angular router
    if (!this.allowEdit) {
      return true;
    }

    // check if the values changed (old !== new)
    // and the changes wasn't saved
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.serverStatus) &&
      !this.changesSaved
    ) {
      return confirm('Do you want to discard the changes?');
    } else {
      // return true if either nothing was changed
      // or it was changed, but changedSaved is set to true
      return true;
    }
  }
}
