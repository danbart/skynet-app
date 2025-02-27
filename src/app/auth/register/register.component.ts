import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private autService: AuthService ) { }

  ngOnInit() {
  }

  onSubmit(data) {
    this.autService.crearUsuario(data);
  }

}
