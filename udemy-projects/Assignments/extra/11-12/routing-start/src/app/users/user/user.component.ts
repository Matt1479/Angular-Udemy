import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user!: { id: number; name: string };
  paramsSubscription!: Subscription;

  // #1 DI - Getting access to currently loaded route
  // The ActivatedRoute object we injected will give us access to the id passed in the URL => Selected User
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // load the User - initialization
    this.user = {
      // id - you only have access to properties you defined in your route parameters ('users/:id')
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    // params is an Observable
    // Observables are a feature which allow you to easily work with Asynchronous tasks
    // Observable is an easy way to subscribe to an event (listen to changes) which might happen in the future,
    // to then execute some code when it happens without having to wait for it now
    // subscribe to params Observable:
    this.paramsSubscription = this.route.params
      // subscribe takes 3 functions as arguments:
      // First function will be fired whenever new data is sent through that Observable (whenever the parameters change in this use case)
      .subscribe(
        // params (updatedParameters) is an object which holds the parameters you define in the route as properties (e.g. /:id)
        // (updatedParameters: Params ) => { }
        (params: Params) => {
          // update the user object
          this.user.id = params['id'];
          this.user.name = params['name'];
          // this will update our user object whenever the parameter(s) change
          // so this code won't be executed during initialization, but ONLY when the parameters change
        }
      );
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
