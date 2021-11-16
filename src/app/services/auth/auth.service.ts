import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Contants } from '../../helpers/contants';
import { Auth } from '../../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _constants = new Contants();

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  public singIn(data: Auth): Observable<Auth>{
    
    return this._httpClient.post<Auth>(`${this._constants.apiUrl}/login`, data);

  }

  public singUp(data: Auth): Observable<Auth>{

    return this._httpClient.post<Auth>(`${this._constants.apiUrl}/signup`, data);

  }

  public loggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  public getToken(): any{
    return localStorage.getItem('token');
  }

  public logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/singin']);
  }

}
