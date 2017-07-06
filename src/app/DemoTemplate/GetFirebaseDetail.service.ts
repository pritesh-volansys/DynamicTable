import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GetFirebaseDetailService {
  token: string;
  changeToken = new Subject<string>();

  constructor() { }  

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
      error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
      response => {
        firebase.auth().currentUser.getToken()
          .then(
          (token: string) => {
            this.token = token
            this.changeToken.next(this.token);
          })
      })
      .catch(
      error => console.log(error)
      );
  }


  getFBToken() {
    firebase.auth().currentUser.getToken().then(function (data) {
      this.token = data;
    }).catch(function (error) {
      console.log(error)
    });
    return this.token;
  }
}
