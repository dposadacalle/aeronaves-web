import {RouterModule, Routes} from '@angular/router';

import { SingInComponent } from './../app/components/sing-in/sing-in.component';
import { SingUpComponent } from './../app/components/sing-up/sing-up.component';
import { ListaViajesComponent } from './../app/components/viajes/lista-viajes/lista-viajes.component';
import { ApartarViajeComponent } from './../app/components/viajes/apartar-viaje/apartar-viaje.component';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES : Routes = [
    { path: '', redirectTo: 'candados', pathMatch: 'full' },
    { path: 'singin', component: SingInComponent },
    { path: 'singup', component: SingUpComponent },
    { path: 'home', component: HomeComponent },
    { path: 'viajes', component: ListaViajesComponent },
    { path: 'apartarViaje', component: ApartarViajeComponent }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);