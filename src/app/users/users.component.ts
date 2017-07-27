import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ UsersService ]
})
export class UsersComponent implements OnInit {

  users;
  @Output() selectedUserId = new EventEmitter(); // Event emitter

  // Get the list of users
  constructor(private _userService: UsersService) {
    this._userService.getUsers()
        .subscribe(
          responseJsonFormat => this.users = responseJsonFormat 
        );
    //this.users = this._userService.getUsers();
  }

  ngOnInit() {
  }

  // Emit event when a user is clicked
  onUserClick(user){
    this.selectedUserId.emit(user['id']);
  }

}
