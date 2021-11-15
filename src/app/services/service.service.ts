import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

// Helpers
import { Helper } from './../helpers/helpers';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _httpClient: HttpClient) { }

  
}
