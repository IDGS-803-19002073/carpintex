import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { AgregarComponent } from './utl/agregar/agregar.component';
import { AlumnosComponent } from './utl/alumnos/alumnos.component';
import { EditarComponent } from './utl/editar/editar.component';
import { LoginComponent } from './home/login/login.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { MenuComponent } from './menu_admin/menu.component';
import { ConocenosComponent } from './home/conocenos/conocenos.component';
import { InventarioComponent } from './home/inventario/inventario.component';

const routes: Routes = [
  {path: '',component: InicioComponent, pathMatch:'full'},
  {path:'inicio',component: InicioComponent},
  {path:'conocenos',component: ConocenosComponent},
  {path:'menu',component: MenuComponent},
  {path:'inventario',component: InventarioComponent},

  {path:'Agregar', component: AgregarComponent},
  {path: 'verAlumnos',component: AlumnosComponent },
  {path: 'Editar/:id',component: EditarComponent },
  {path: 'login',component: LoginComponent },

 
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  
 }
