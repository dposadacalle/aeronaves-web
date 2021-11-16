import { Component, OnInit, Input } from '@angular/core';
import { Viaje } from 'src/app/interfaces/viaje.interface';

@Component({
  selector: 'app-tarjeta-viaje',
  templateUrl: './tarjeta-viaje.component.html',
  styleUrls: ['./tarjeta-viaje.component.scss']
})
export class TarjetaViajeComponent implements OnInit {

  @Input() inViaje: Viaje = { origen: '', destino: ''};

  constructor() { }

  ngOnInit(): void {
  }

}
