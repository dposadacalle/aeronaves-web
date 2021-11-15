import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Helper } from '../../helpers/helpers';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  constructor(private _httpClient: HttpClient, private helper: Helper) { }

  public listarViajes(): Observable<any>{

    return this._httpClient.get(`${this.helper._baseUrl}/viajes`);
  }

  public crearViaje(viaje: any): Observable<any>{

    return this._httpClient.post(`${this.helper._baseUrl}/viajes`, viaje);
  }

}
