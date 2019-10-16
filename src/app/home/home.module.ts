import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { ShareModule } from '../share/share.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { InicioComponent } from '../inicio/inicio.component';
import { UsuariosComponent } from '../administrator/usuarios/usuarios.component';
import { UserComponent } from '../auth/user/user.component';



@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    UsuariosComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ShareModule,
    RouterModule
  ]
})
export class HomeModule { }
