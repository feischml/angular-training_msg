import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostsService {

  constructor(private _http: Http) { }

  // get the posts for a given userId
  getPostsForUser(userid){
    return this._http.get("https://jsonplaceholder.typicode.com/posts/?userId="+userid)
      .map(response => response.json());
  }

}
