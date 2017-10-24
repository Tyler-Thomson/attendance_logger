import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';

@Injectable()
export class LoginService {

  constructor(private _http: Http) { }

  login(newUser: User, callback) {
    this._http.post('/users', newUser).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }
}
