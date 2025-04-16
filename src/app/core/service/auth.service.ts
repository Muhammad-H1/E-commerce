import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../apiRoot/baseUrl';
import { ILogin, IRgister } from '../interface/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httClient:HttpClient) { }

  register(registerData: IRgister) : Observable<any> {
    return this._httClient.post(`${baseUrl}/api/users`,registerData);
  }

  login(loginUser: ILogin): Observable<any> {
    return this._httClient.post(`${baseUrl}/api/users/auth`,loginUser)
  }
}
