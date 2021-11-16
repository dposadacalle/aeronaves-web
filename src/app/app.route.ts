import {RouterModule, Routes} from '@angular/router';

import { SingInComponent } from './../app/components/sing-in/sing-in.component';
import { SingUpComponent } from './../app/components/sing-up/sing-up.component';
import { HomeComponent } from './components/home/home.component';
import { ViajesComponent } from './components/viajes/viajes.component';

// Guards
import { AuthGuard } from './auth.guard';
import { CrearViajeComponent } from './components/viajes/crear-viaje/crear-viaje.component';

const APP_ROUTES : Routes = [
    { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
    },
    { 
        path: 'singin', 
        component: SingInComponent 
    },
    { 
        path: 'home', 
        component: HomeComponent 
    },
    { 
        path: 'singup', 
        component: SingUpComponent 
    },
    { 
        path: 'viajes', 
        component: ViajesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'nuevoViaje',
        component: CrearViajeComponent,
        canActivate: [AuthGuard]
    }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);