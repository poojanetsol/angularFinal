import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userValues: Observable<any[]>;
  user: Observable<firebase.User>;
  constructor(private firebaseAuth: AngularFireAuth,private afauth:AngularFireAuth,private db:AngularFirestore,private router: Router) { 
    this.user = firebaseAuth.authState;
    this.userValues = db.collection('users').valueChanges();
  }

  /*getUsers(){
      return[
        {name:"Pooja Goyal",email:"pooja.goyal@netsolutions.com",price:20},
        {name:"Test User",email:"testUser@netsolutions.com",price:30},
        {name:"test User 2",email:"testUser2@gmail.com",price:50}
      ];
  }*/
	login(email: string, password: string) {
		this.firebaseAuth
		.auth
		.signInWithEmailAndPassword(email, password)
		.then(value => {
			alert('login successfully!!');
			this.router.navigate(['/dashboard']);
		})
		.catch(err => {
			alert('Please check email and password!!');
		});
	}
	  
	signUp(email: string, password: string) {
      this.firebaseAuth
        .auth
        .createUserWithEmailAndPassword(email, password)
        .then(value => {
          alert('sucess,Data has been save successfully!!');
        })
        .catch(err => {
			alert('There is some issue!!');
        });    
    }
	
	logout() {
		this.firebaseAuth
		  .auth
		  .signOut();
		this.router.navigate(['/login']);
	}

  getUsers(){
    return this.userValues;
  }

  addUsers(firstName,email,age){
	const user = this.db.collection('users');
	const newUser:any = {'name':firstName,'email':email,'age':age};
	user.add(newUser)
	.then(res => {
		this.router.navigate(['/list-user']);
	})
	.catch(err => {
		alert(err);
	});
  }
}
