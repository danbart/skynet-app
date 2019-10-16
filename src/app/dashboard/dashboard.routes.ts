import { Routes } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';
import { UserComponent } from '../auth/user/user.component';
import { UsuariosComponent } from '../administrator/usuarios/usuarios.component';


export const dashbordRoutes: Routes = [
    { path: 'admin/usuers', component: UsuariosComponent },
    { path: '', component: InicioComponent },
    { path: 'profile', component: UserComponent },
];
