import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Usuario } from '../../auth/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reduce';
import { Subscription } from 'rxjs';
import * as jQuery from 'jquery';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit, OnDestroy {

  name: string;
  email: string;
  estado: boolean;

  subscription: Subscription = new Subscription();

  constructor( private authService: AuthService, private store: Store<AppState> ) { }

  ngOnInit() {
    this.subscription = this.store.select('auth').pipe(
      filter( auth => auth.user != null)
    ).subscribe( auth => {
      this.name = auth.user.name;
      this.email = auth.user.email;
      this.estado = auth.user.estado;
    });


     // ------------------------------------------------------- //
    // Sidebar Functionality
    // ------------------------------------------------------ //
    jQuery('#toggle-btn').on('click', function(e) {
      e.preventDefault();
      jQuery(this).toggleClass('active');

      jQuery('.side-navbar').toggleClass('shrinked');
      jQuery('.content-inner').toggleClass('active');

      if (jQuery(window).outerWidth() > 1183) {
          if (jQuery('#toggle-btn').hasClass('active')) {
              jQuery('.navbar-header .brand-small').hide();
              jQuery('.navbar-header .brand-big').show();
          } else {
              jQuery('.navbar-header .brand-small').show();
              jQuery('.navbar-header .brand-big').hide();
          }
      }

      if (jQuery(window).outerWidth() < 1183) {
          jQuery('.navbar-header .brand-small').show();
      }
  });


      // ------------------------------------------------------- //
      // Search Box
      // ------------------------------------------------------ //
    jQuery('#search').on('click', e => {
      e.preventDefault();
      jQuery('.search-box').fadeIn();
      });

    jQuery('.dismiss').on('click', () => {
      jQuery('.search-box').fadeOut();
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    this.authService.loguot();
  }

}
