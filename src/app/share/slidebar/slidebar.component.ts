import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reduce';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styles: []
})
export class SlidebarComponent implements OnInit, OnDestroy {

  name: string;
  estado: boolean;

  subscription: Subscription = new Subscription();

  constructor(  private authService: AuthService, private store: Store<AppState> ) { }

  ngOnInit() {
    this.subscription = this.store.select('auth').pipe(
      filter( auth => auth.user != null)
    ).subscribe( auth => {
      this.name = auth.user.name;
      this.estado = auth.user.estado;
    });
  }

  ngOnDestroy() {

  }

}
