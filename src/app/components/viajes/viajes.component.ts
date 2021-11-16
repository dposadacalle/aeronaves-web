import { Component, OnInit } from '@angular/core';

import { ViajeService } from '../../services/viajes/viaje.service';
import { Viaje } from '../../interfaces/viaje.interface';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss']
})
export class ViajesComponent implements OnInit {

  public viajes: Viaje[] = [];

  constructor(private _viajeService: ViajeService) { }

  ngOnInit(): void {
    this.obtenerViajes();
  }

  public obtenerViajes(){

    this._viajeService
        .getViajes()
        .subscribe((dataViaje: any) => {
          
          for(let viaje of dataViaje.data){

            this.viajes.push({
              origen: viaje.origen,
              destino: viaje.destino
            })
          }

    })
  }

}
