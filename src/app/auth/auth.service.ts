import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Usuario } from './user.model';

import { Router } from '@angular/router';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

import { Store } from '@ngrx/store';
import { AppState } from '../app.reduce';
import { map } from 'rxjs/operators';
import { SetUserAction, UnsetUserAction } from './auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubscription: Subscription = new Subscription();
  private usuario: Usuario;

  constructor( private router: Router, private store: Store<AppState> ) { }



  initAuthListener() {
    /* this.afAuth.authState.subscribe( (fbuser: firebase.User ) => {
      if ( fbuser ) {
        this.userSubscription = this.afDB.doc(`usuarios/${fbuser.uid}`).valueChanges()
        .subscribe((usuarioObj: any) => {
          const newUser = new Usuario(usuarioObj);
          this.store.dispatch( new SetUserAction(newUser));
          this.usuario = newUser;
        });
      } else {
        this.usuario = null;
        this.userSubscription.unsubscribe();
      }
    }); */
  }

  crearUsuario( data: any ) {
    /* this.afAuth.auth
    .createUserWithEmailAndPassword( data.email, data.password )
    .then( resp => {
      // cargar usuario a firebase

      const user: Usuario = {
        uid: resp.user.uid,
        email: resp.user.email,
        name: data.name,
        role: data.role,
        estado: data.estado,
        avatarImg: 'img'
      };

      this.afDB.doc(`usuarios/${user.uid}`)
      .set(user)
      .then( () => {
        Swal.fire('Cargado Exitosamente');
        this.router.navigate(['/admin/usuers']);
      });
    })
    .catch( error => {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: error.message
      });
    }); */
  }

  // Login
  login(email: string, password: string) {
   /*  this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then( resp => {
      this.router.navigate(['/']);
    })
    .catch(err => {
      Swal.fire('Error en el login', err.message, 'error');
    }); */
  }

  // logout
  loguot() {
    this.router.navigate(['/login']);
    // this.afAuth.auth.signOut();
    this.store.dispatch( new UnsetUserAction());
  }

  isAuth() {
    /* return this.afAuth.authState.pipe(
      map( fbUser => {

        if ( fbUser == null ) {
          this.router.navigate(['/login']);
        }

        return fbUser != null;
      })
    ); */
    return true != null;
  }

  getUsuario() {
    return {... this.usuario };
  }


}
