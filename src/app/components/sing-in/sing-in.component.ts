import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

// Interfaces
import { Auth } from '../../interfaces/auth.interface';

// Services
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {

  @Output() isSingUp  = new EventEmitter<boolean>();
  @Input() isRegistro: boolean = false;

  public user: Auth = {

    email: '',
    password: ''
  }

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  public singIn(){

    if(this.user && this.user.email !== '' && this.user.password !== ''){

      if(this.isRegistro){
        
        this._authService
            .singUp(this.user)
            .subscribe((result: any) => {
  
              if(result.data){
  
                console.log(result);
                localStorage.setItem('token', result.data.token);
                this._router.navigate(['/viajes']);
  
              }
  
        })
        
      }else{
        
        this._authService
            .singIn(this.user)
            .subscribe((result: any) => {
  
              if(result.data){
  
                console.log(result);
                localStorage.setItem('token', result.data.token);
                this._router.navigate(['/viajes']);
  
              }
  
        })
      }
    }
   
  }

}
