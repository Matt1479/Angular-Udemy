import { Component, OnDestroy, OnInit } from '@angular/core';
import { Data } from '@angular/router';

import {
  filter,
  interval,
  map,
  Observable,
  Observer,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription!: Subscription;

  constructor() {}

  ngOnInit() {
    const customIntervalObservable = new Observable(
      // observer - data changes / errors / completion
      (observer: Observer<number>) => {
        let count = 0;
        setInterval(() => {
          observer.next(count);

          if (count === 2) {
            observer.complete();
            // complete the observable - no new values
          }

          if (count > 3) {
            observer.error(new Error('Count is greater than 3!'));
            // Observable stops/cancels
          }
          count++;

          // emit a new value
          // observer.next();

          // emit errors
          // observer.error();

          // complete the observable
          // observer.complete();
        }, 1000);
      }
    );

    // deprecated:
    // const customIntervalObservable = Observable.create();

    // deprecated (subscribe args)
    // this.firstObsSubscription = customIntervalObservable
    //   .pipe(
    //     map((data: number) => {
    //       // transform data
    //       return 'Round: ' + (data + 1);
    //     })
    //   )
    //   .subscribe(
    //     (data) => {
    //       console.log(data);
    //       // 1st argument - data changes handler function
    //     },
    //     (error) => {
    //       console.log(error);
    //       // 2nd argument - error handler function
    //       // error cancels the observables
    //     },
    //     () => {
    //       console.log('Completed!');
    //       // 3rd argument - completion handler function
    //       // this never gets fired if there're errors
    //     }
    //   );

    // new approach
    this.firstObsSubscription = customIntervalObservable
      .pipe(
        // filter out data
        filter((data: any): any => {
          // return boolean
          return data > 0;
          // return every value but the first one
        }),
        map((data: number) => {
          // transform data
          return 'Round: ' + (data + 1);
        })
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('Completed!');
        },
      });
  }

  ngOnDestroy(): void {
    // unsubscribe to avoid memory leaks
    this.firstObsSubscription.unsubscribe();
  }
}
