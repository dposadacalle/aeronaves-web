import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Helper } from '../../helpers/helpers';
import { Auth } from '../../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient: HttpClient, private helper: Helper) { }

  public singIn(data: Auth): Observable<Auth>{
    
    return this._httpClient.post<Auth>(`${this.helper._baseUrl}/login`, data);

  }

  public singUp(data: Auth): Observable<Auth>{

    return this._httpClient.post<Auth>(`${this.helper._baseUrl}/singup`, data);

  }

}
