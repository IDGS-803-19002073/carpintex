import { Injectable } from '@angular/core';
import { AlumnosUtl, Pedido } from './interfaces/Home.Interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoApiService {
 
  constructor(private http:HttpClient) { }
 
// get alumnos():AlumnosUtl[]{
//   return[...this._alumnosUtl]
// }
 
public getAlumnos():Observable<AlumnosUtl[]>{
  return this.http.get<AlumnosUtl[]>('https://localhost:7132/api/Grupos')
}
 
agregarNuevoAlumno(datos:AlumnosUtl){
  return this.http.post('https://localhost:7132/api/Grupos',datos)
}

public getProductos():Observable<AlumnosUtl[]>{
  return this.http.get<AlumnosUtl[]>('https://localhost:7241/api/Producto')
}

public   login(correo: string, contrasena: string) {
  const url = `https://localhost:7241/api/Usuario/login/${encodeURIComponent(correo)}?password=${encodeURIComponent(contrasena)}`;
  return this.http.get<AlumnosUtl[]>(url);
}

agregarPedido(datos:Pedido){
  return this.http.post('https://localhost:7241/api/Pedido',datos)
}

public getPedidos(id:number){
  return this.http.get('https://localhost:7241/api/Pedido/'+id)
}

public getAllPedidos():Observable<Pedido[]>{
  return this.http.get<Pedido[]>('https://localhost:7241/api/Pedido')
}

updatePedido(id: number, nuevoEstatus: number): Observable<any> {
  const body = nuevoEstatus;
  return this.http.put(`https://localhost:7241/api/Pedido/${id}`, body);
}

public getEnvios():Observable<AlumnosUtl[]>{
  return this.http.get<AlumnosUtl[]>('https://localhost:7241/api/Envios')
}

updateEnvios(id: number, nuevoEstatus: number): Observable<any> {
  const body = nuevoEstatus;
  return this.http.put(`https://localhost:7241/api/Envios/${id}`, body);
}


}
