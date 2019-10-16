import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private autService: AuthService ) { }

  estado = true;

  ngOnInit() {
  }

  onSubmit(data) {

    // console.log({... data, estado: this.estado});
    this.autService.crearUsuario({... data, estado: this.estado});
  }

}
