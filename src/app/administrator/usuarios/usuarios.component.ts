import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit, OnDestroy {

  users: string[] = [];
  UserSubscribe: Subscription = new Subscription();

  constructor( private globalService: GlobalService ) { }

  ngOnInit() {
    this.UserSubscribe = this.globalService.getUser().subscribe( res => {
      this.listenerUsers(res);
    });
  }

  ngOnDestroy() {
    this.UserSubscribe.unsubscribe();
  }

  listenerUsers(user: any ) {
    this.users = user.data;
  }

}
