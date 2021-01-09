import { Component, OnInit } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  successMessage:string = "Success!";
  auth:string = "empty";

  myID = {
    username: "admin",
    password: "9009kj"
  };
   inputUsername: string = '';
   inputPassword = '';

  constructor() { }

  ngOnInit(): void {

  }

  addInfor() {
    if (this.inputUsername != this.myID.username || this.inputPassword != this.myID.password) 
    {
      this.fail();
    } else 
    {
      this.success();
    }
  }

  success() {
    this.auth = "correct!";
  }

  fail() {
    this.auth = "wrong! Please try again.";
  }
}
