import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UsersService } from '../users/users.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ UsersService ]
})
export class UserComponent implements OnInit {

  user = {};
  formGroup: FormGroup

  constructor(private _formBuilder: FormBuilder,
              private _usersService: UsersService,
              private _route: ActivatedRoute) {
    this.formGroup = this._formBuilder.group({
      name: [],
      email: ['', Validators.required],
      phone: []
    })
  }

  ngOnInit() {
    this._route.params.subscribe( 
      params => {
        this._usersService.getUser(params['id']).subscribe(
          response => this.user = response
        )
      }
     )
  }

}
