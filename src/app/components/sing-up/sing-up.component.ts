import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

// Interfaces
import { Auth } from '../../interfaces/auth.interface';

// Services
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {

  public mostrar: boolean = true;

  public user: Auth = {

    email: '',
    password: ''
  }

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

}
