import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Subscription } from 'rxjs';
import { Post } from './post.mode';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error: null | string = null;
  private errorSub!: Subscription;

  constructor(private http: HttpClient, private pService: PostsService) {}

  ngOnInit() {
    this.errorSub = this.pService.errorSubject.subscribe(
      (errorMessage: string) => {
        this.error = errorMessage;
      }
    );

    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.pService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
    this.pService.deletePosts().subscribe(() => {
      // clear the loadedPosts array
      this.loadedPosts = [];
    });
  }

  private fetchPosts() {
    // result handling
    this.isFetching = true;

    this.pService.fetchPosts().subscribe({
      next: (posts: Post[]) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      error: (error: Error) => {
        this.isFetching = false;
        this.error = error.message;
        // console.log(error);
      },
    });
  }

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}
