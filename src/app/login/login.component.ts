import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  constructor(public UsersService: UsersService) { }
  
  ngOnInit() {
  }
  
  login() {
    this.UsersService.login(this.email, this.password);
    this.email = this.password = '';    
  }
  
}
