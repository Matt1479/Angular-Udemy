import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit, OnDestroy {
  server!: { id: number; name: string; status: string };
  paramsSubscription!: Subscription;
  // fragmentSubscription!: Params;

  constructor(
    private serversService: ServersService,
    // #1 Inject ActivatedRoute
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // fetch data from resolver
    this.route.data.subscribe((data: Data) => {
      // bind the fetched data
      // the data['server'] index has to match the name
      // you used when you assigned your resolver
      // which was: resolve: { server: ServerResolver } (server)
      this.server = data['server'];
    });

    // const id = +this.route.snapshot.params['id']; // + means we're converting this value to a number
    // this.server = this.serversService.getServer(id)!;

    // this.paramsSubscription = this.route.params.subscribe(
    //   (updatedParams: Params) => {
    //     this.server = this.serversService.getServer(+updatedParams['id'])!;
    //   }
    // );
    // this.fragmentSubscription = this.route.fragment.subscribe();
  }

  ngOnDestroy(): void {
    // this.paramsSubscription.unsubscribe();
  }

  onEdit() {
    // absolute path:
    // this.router.navigate([ '/servers', this.server.id, 'edit']);
    // relative path:
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }
}
