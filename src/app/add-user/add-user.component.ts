import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  users = {};
  firstName:string;
  email:string;
  age:string;
  constructor(private _userService:UsersService) { }

  ngOnInit() {
  }

  saveUser(){
    this._userService.addUsers(this.firstName,this.email,this.age);
  }
}
