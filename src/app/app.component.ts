import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  template: '<app-DemoTemplate></app-DemoTemplate>',
})
export class AppComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDd795-J77Oo5pNDEXECymWHFvdxA9iM28",
      authDomain: "ethereal-honor-168405.firebaseapp.com",
    });
  }
}

