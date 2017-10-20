import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class LoginService {

  constructor(private _http: Http) { }

  create(user) {
    return this._http.post('/users', user).map(data => data.json()).toPromise();
  }
}
