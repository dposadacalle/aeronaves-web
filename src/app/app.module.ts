import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// SweetAlert2
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { APP_ROUTING } from './../app/app.route';

// Guards
import { AuthGuard } from './auth.guard';

// Components
import { AppComponent } from './app.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ViajesComponent } from './components/viajes/viajes.component';
import { CrearViajeComponent } from './components/viajes/crear-viaje/crear-viaje.component';
import { TarjetaViajeComponent } from './components/viajes/tarjeta-viaje/tarjeta-viaje.component';

// Services
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    SingUpComponent,
    NavbarComponent,
    HomeComponent,
    ViajesComponent,
    CrearViajeComponent,
    TarjetaViajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module,
    APP_ROUTING
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
