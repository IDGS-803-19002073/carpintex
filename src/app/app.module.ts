import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlumnosComponent } from './utl/alumnos/alumnos.component';
import { MenuComponent } from './menu_admin/menu.component';
import { HomeComponent } from './home/home.component';
import { AgregarComponent } from './utl/agregar/agregar.component';
import { EditarComponent } from './utl/editar/editar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { AlumnoFilterPipe } from './utl/alumnos-filter.pipe';
import { LoginComponent } from './home/login/login.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { ConocenosComponent } from './home/conocenos/conocenos.component';
import { InventarioComponent } from './home/inventario/inventario.component';
import { MateriaComponent } from './menu_admin/materiaPrima/materia.component';
import { SignupComponent } from './home/signup/signup.component';
import { PedidosComponent } from './home/pedidos/pedidos.component';
import { CarritoComponent } from './home/carrito/carrito.component';
import { PagoComponent } from './home/pago/pago.component';


@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    MenuComponent,
    AlumnoFilterPipe,
    HomeComponent,
    AgregarComponent,
    EditarComponent,
    LoginComponent,
    InicioComponent,
    ConocenosComponent,
    InventarioComponent,
    MateriaComponent,
    SignupComponent,
    PedidosComponent,
    CarritoComponent,
    PagoComponent,
  ],
  imports: [
    // NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
