import { Component } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [ PostsService ]
})
export class PostsComponent{

  posts;

  constructor(private _postsService: PostsService) { }

  refreshPosts(userId){
    this._postsService.getPostsForUser(userId)
        .subscribe( response => this.posts = response );
  }

}
