import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { take } from 'rxjs/operators';
import { CanActivate, CanLoad } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AtuhGuardService implements CanActivate, CanLoad {

  constructor( private authService: AuthService ) { }

  canActivate() {
    return this.authService.isAuth();
  }

  canLoad() {
    return this.authService.isAuth();
    /* .pipe(
      // para cancelar la susbcripción
      take(1)
    );*/
  }
}
