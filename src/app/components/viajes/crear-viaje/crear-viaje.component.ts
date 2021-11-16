import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ViajeService } from '../../../services/viajes/viaje.service';
import { Viaje } from '../../../interfaces/viaje.interface';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.component.html',
  styleUrls: ['./crear-viaje.component.scss']
})
export class CrearViajeComponent implements OnInit {

  public viaje: Viaje = {
    origen: '',
    destino: ''
  };

  constructor(private _viajeService: ViajeService, private _router: Router) { }

  ngOnInit(): void {
  }

  guardarViaje(){

    if(this.viaje.origen !== '' && this.viaje.destino !== ''){

      this._viajeService
          .createViaje(this.viaje)
          .subscribe((dataViaje: any) => {

            if(dataViaje.completado){

              Swal.fire({
                title: 'Regitro guardado',
                text: `${dataViaje.message}`,
                icon: 'success',
                confirmButtonText: 'Cool'
              })

              this._router.navigate(['/viajes']);

            }else{

              Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })

            }
      })

    }else{

      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'info',
        confirmButtonText: 'Cool'
      })
     

    }

  }

}
