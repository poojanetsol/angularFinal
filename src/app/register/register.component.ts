import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  constructor(public UsersService: UsersService) { }

  ngOnInit() {
  }
  signUp() {
    this.UsersService.signUp(this.email, this.password);
    this.email = this.password = '';
  }
}
