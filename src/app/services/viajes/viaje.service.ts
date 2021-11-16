import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Helpers
import { Contants } from '../../helpers/contants';

// Interfaces
import { Viaje } from '../../interfaces/viaje.interface';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  private _constants = new Contants();

  constructor(private _httpClient: HttpClient) { }

  public getViajes(): Observable<Viaje>{

    return this._httpClient.get<Viaje>(`${this._constants.apiUrl}/viajes`);
    
  }

  public createViaje(dataViaje: Viaje): Observable<Viaje>{

    return this._httpClient.post<Viaje>(`${this._constants.apiUrl}/viajes/crearViaje`, dataViaje);
    
  }

}
