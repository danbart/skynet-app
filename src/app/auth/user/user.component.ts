import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reduce';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  email: string;
  estado: boolean;
  role: string;
  uid: string;

  subscription: Subscription = new Subscription();

  constructor(  private authService: AuthService, private store: Store<AppState> ) { }

  ngOnInit() {
    // this.subscription = this.store.select('auth').pipe(
    //   filter( auth => auth.user != null)
    // ).subscribe( auth => {
    //   this.name = auth.user.name;
    //   this.email = auth.user.email;
    //   this.estado = auth.user.estado;
    //   this.role = auth.user.role;
    //   this.uid = auth.user.uid;
    // });
  }

}
