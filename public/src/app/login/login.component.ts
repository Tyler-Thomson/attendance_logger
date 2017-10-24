import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './bootstrap.min.css']
})
export class LoginComponent implements OnInit {

  newUser: User = new User();
  errors: string[] = [];
  successMessage = false;

  constructor(
    private _loginService: LoginService,
    private _router: Router
  ) { }

  ngOnInit() {}

  login() {
    this.successMessage = false;
    this.errors = [];
    this._loginService.login(this.newUser, (res) => {
      if (res.errors) {
        for (const key of Object.keys(res.errors)) {
          const error = res.errors[key];
          this.errors.push(error.message);
      }
    } else {
      this.successMessage = true;
      this._router.navigateByUrl('/');
    }
    });
  }
}
