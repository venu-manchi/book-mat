import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {}

  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log(this.model)
  }

  title = 'Tic Tac Toe';
  isAuthenticated = false;
  
  async logout(): Promise<void> {
    // todo
  }
}


