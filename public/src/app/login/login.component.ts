import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser: any = {};
  errors: any = [];

  constructor(
    private _loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {}

  create() {
    this.errors = [];
    return this._loginService.create(this.newUser)
      .then(user => {
        console.log(user);
        if (user.errors) {
          for(let key in user.errors) {
            let error = user.error[key];
            this.errors.push(error.message);
          }
        } else {
          this.router.navigateByUrl('login');
        }
      })
      .catch(err => console.log(err));
  }

}
