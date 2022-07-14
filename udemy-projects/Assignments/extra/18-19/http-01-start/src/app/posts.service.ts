import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Subject, tap, throwError } from 'rxjs';

import { Post } from './post.mode';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  errorSubject = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };

    // normally you send JSON data to API
    // here Angular automatically converts JS to JSON
    this.http
      .post<{ name: string }>(
        'https://ng-tutorial-5bad5-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        postData,
        {
          observe: 'response',
        }
      )
      .subscribe({
        next: (responseData) => {
          console.log(responseData);
        },
        error: (error: Error) => {
          this.errorSubject.next(error.message);
        },
      });
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return (
      this.http
        // get() - generic method
        // specify the type of response body here
        .get<{ [key: string]: Post }>(
          'https://ng-tutorial-5bad5-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
          {
            headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
            params: searchParams,
          }
        )
        // pipe() -- transform data
        // map() -- maps the data & returns (changed) data
        .pipe(
          map((responseData) => {
            const postsArray: Post[] = [];
            for (const key in responseData) {
              if (responseData.hasOwnProperty(key)) {
                postsArray.push({ ...responseData[key], id: key });
              }
            }
            return postsArray;
          }),
          catchError((errorResp) => {
            throw errorResp;
          })
        )
    );
  }

  deletePosts() {
    return this.http
      .delete(
        'https://ng-tutorial-5bad5-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
          observe: 'events',
          responseType: 'text', // 'json' by default
        }
      )
      .pipe(
        tap((event) => {
          console.log(event);

          if (event.type === HttpEventType.Sent) {
            // ...
          }

          // check if we got the response
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
