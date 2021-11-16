import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

// Helpers
import { Contants } from '../helpers/contants';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _httpClient: HttpClient) { }

  
}
