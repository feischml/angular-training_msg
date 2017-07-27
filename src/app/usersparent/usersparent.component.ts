import { Component, ViewChild } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';

@Component({
  selector: 'app-usersparent',
  templateUrl: './usersparent.component.html',
  styleUrls: ['./usersparent.component.css']
})
export class UsersparentComponent {

  // Create a reference to the PostsComponent in order to call the refreshPosts method
  @ViewChild(PostsComponent) postsComponent: PostsComponent;

  constructor() { }

  // When a selected user has changed, refresh the list of posts
  selectedUserChanged(userId){
    this.postsComponent.refreshPosts(userId);
  }

}
