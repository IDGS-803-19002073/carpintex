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
import { MateriaComponent } from './menu_admin/materiaPrima/materia.component';
import { AuthGuard } from './Auth/AuthGuard.component';
import { SignupComponent } from './home/signup/signup.component';
import { PedidosComponent } from './home/pedidos/pedidos.component';
import { CarritoComponent } from './home/carrito/carrito.component';
import { PagoComponent } from './home/pago/pago.component';

const routes: Routes = [
  {path: '',component: InicioComponent, pathMatch:'full'},
  {path:'inicio',component: InicioComponent},
  {path:'conocenos',component: ConocenosComponent},
  { path: 'admin-menu', component: MenuComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },
  {path:'inventario',component: InventarioComponent},
  {path:'materia',component: MateriaComponent},
  {path:'Agregar', component: AgregarComponent},
  {path: 'verAlumnos',component: AlumnosComponent },
  {path: 'Editar/:id',component: EditarComponent },
  {path: 'login',component: LoginComponent },
  {path: 'signup',component: SignupComponent },
  {path: 'pedidos',component: PedidosComponent },
  {path: 'carrito',component: CarritoComponent ,},
  {path: 'pago',component: PagoComponent}
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  
 }
