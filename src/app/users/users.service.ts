import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

    constructor(private _http: Http){ }

    // Get all Users
    getUsers(){
        //return ["User1", "User2", "User3", "User4"];
        return this._http.get("https://jsonplaceholder.typicode.com/users")
            .map(response => response.json());
    }

    // Get User by id
    getUser(userId){
        return this._http.get("https://jsonplaceholder.typicode.com/users/" + userId)
            .map(response => response.json());
    }

}