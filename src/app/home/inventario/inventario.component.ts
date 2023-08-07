import { Component } from '@angular/core';
// import { data } from 'jquery';
// import { AlumnosUtl } from 'src/app/interfaces/utl.Interface';
import { ProyectoApiService } from 'src/app/proyecto-api.service';
declare var $: any;
// var carrito: Array<{
//   idUsuario:number,
//   idProducto:number,
//   precio:number,
//   nombreProducto:string,
//   cantidadAdded:number,
//   cantidadMaxima:number
//   largo:number,
//   ancho:number,
//   altura:number,
// }> = []; 
@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']  
})
export class InventarioComponent {
  constructor(public alumnosUtl:ProyectoApiService){}
  dataSource:any=[];
   carrito: Array<{
    idUsuario:number,
    idProducto:number,
    precio:number,
    nombreProducto:string,
    cantidadAdded:number,
    cantidadMaxima:number
    largo:number,
    ancho:number,
    altura:number,
  }> = []; 
// counter=0;
  total = 0;
  cantidadAdded = 0;

  ngOnInit(): void {
    this.alumnosUtl.getProductos().subscribe(
      {
        next: response=>{
          // console.log(response);
      this.dataSource=response;
    },
    error: error=>console.log(error)
  }
    );
    // console.log(this.dataSource);
}
  agregarCanasta(id:number,nombreProducto:string,cantidad:number,precio:number,largo:number,ancho:number,altura:number){
    if (localStorage.getItem('data') && this.carrito.length === 0) {
      const dataFromLocalStorage = localStorage.getItem('data');
      if (dataFromLocalStorage !== null) {
        JSON.parse(dataFromLocalStorage).forEach((dataCarrito:any )=> {
          this.carrito.push(dataCarrito);
        });
      }
    }
    console.log(this.carrito);

    const popUpCarrito = document.getElementById("popUpCarrito");
  var content = '';  
  var encontrado = this.carrito.some(function(producto) {return producto.idProducto === id;});
  if (!encontrado && cantidad>0) {
    this.carrito.push({
      idUsuario:parseInt('{{current_user.id}}'),
      idProducto:id,
      precio:precio,
      nombreProducto:nombreProducto,
      cantidadAdded:0,
      cantidadMaxima:cantidad,
      largo:largo,
      ancho:ancho,
      altura:altura,
    })}
    if(cantidad==0){
      $("#danger-alert").fadeTo(2000, 500).slideUp(500, function() {
        $("#danger-alert").slideUp(500);
      })
    } 
    let index = this.carrito.findIndex(producto => producto.idProducto === id);
    // Verificar si se encontró el objeto en el array
    if (index !== -1) {
    if(this.carrito[index].cantidadAdded<this.carrito[index].cantidadMaxima){
      this.carrito[index].cantidadAdded=this.carrito[index].cantidadAdded+1;  
      localStorage.setItem('data', JSON.stringify(this.carrito));

      $( "#txtPopupCantidad" ).empty();
      $( "#txtPopupCantidad" ).append( document.createTextNode( this.carrito.length.toString() ));
    }
    }
  if(this.carrito[index].cantidadMaxima>0){
  $.each(this.carrito, function(index : number, value: any) {
    content +='<label for="total">'+value.nombreProducto+'</label>' 
    content +=  '<div class="row mt-2 mb-2"><button onclick="agregar('+value.idProducto+')" class="btn btn-outline-warning ml-4">+</button>';
    content+='<div class="col-4 "><input type="text" value="'+value.cantidadAdded+'" class=" text-center form-control" aria-label="Recipientusername with two button addons" aria-describedby="button-addon1" readonly></div>';
    content+='<button onclick="quitar('+value.idProducto+')" class="btn btn-outline-warning ">-</button></div>';
    content+='<img src="../../../assets/images/bolsas-de-compra.png" class="card-img mb-4" alt="..." style="height: 100px; width: 100px;">    '
  });
  content+='<label for="total">Total:</label>$<input type="text" class="subtotal"id="subtotal" readonly value=" '+this.total+' ""></div>'
  content +=  '<div class="container"><button type="button" id="btnComprar" class="btn text-white btn-block mt-3" data-toggle="modal" data-target="#exampleModal" style="background-color: #4abaa5;">comprar</button></div>';
  $(popUpCarrito).attr('data-content', content);
  $(popUpCarrito).popover('show');  
  } 
    }
}
