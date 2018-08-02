import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit {
  //users:any;
  users = {};
  constructor(private _userService:UsersService) { 
   //this.users = ["Volvo",100,96],["BMW",60,59],["Toyota",110,100];
    /*this.users = [
                   {name:"Pooja Goyal",email:"pooja.goyal@netsolutions.com",price:20},
                   {name:"Test User",email:"testUser@netsolutions.com",price:30},
                   {name:"test User 2",email:"testUser2@gmail.com",price:50}
                 ];
    */
   this.users = _userService.getUsers();
  }
 
  ngOnInit() {
    
  }

}
