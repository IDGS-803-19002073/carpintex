import { Component } from '@angular/core';
import { data } from 'jquery';
import { AlumnosUtl } from 'src/app/interfaces/utl.Interface';
import { ProyectoApiService } from 'src/app/proyecto-api.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']  
})
export class InventarioComponent {
  constructor(public alumnosUtl:ProyectoApiService){}
  dataSource:any=[];

  total = 0;
  cantidadAñadido = 0;
  carrito: Array<{
    idUsuario:number,
    idProducto:number,
    precio:number,
    nombreProducto:string,
    cantidadAñadido:number,
    cantidadMaxima:number
  }> = []; 
  ngOnInit(): void {
    this.alumnosUtl.getProductos().subscribe(
      {
        next: response=>{
          console.log(response);
      this.dataSource=response;
    },
    error: error=>console.log(error)
  }
    );
    // console.log(this.dataSource);
}
  // agregarCanasta(id,nombreProducto,cantidad,precio){

  //   const popUpCarrito = document.getElementById("popUpCarrito");
  // var content = '';  
  // var encontrado = this.carrito.some(function(producto) {return producto.idProducto === id;});
  // if (!encontrado && cantidad>0) {
  //   this.carrito.push({
  //     idUsuario:parseInt('{{current_user.id}}'),
  //     idProducto:id,
  //     precio:parseInt(precio),
  //     nombreProducto:nombreProducto,
  //     cantidadAñadido:0,
  //     cantidadMaxima:cantidad
  //   })}
  //   if(cantidad==0){
  //     $("#danger-alert").fadeTo(2000, 500).slideUp(500, function() {
  //       $("#danger-alert").slideUp(500);
  //     })
  //   } 
  //   let index = this.carrito.findIndex(producto => producto.idProducto === id);
  //   // Verificar si se encontró el objeto en el array
  //   if (index !== -1) {
  //   if(this.carrito[index].cantidadAñadido<this.carrito[index].cantidadMaxima){
  //     this.carrito[index].cantidadAñadido=this.carrito[index].cantidadAñadido+1;  
  //     this.total+=this.carrito[index].precio;
  //     this.cantidadAñadido++;
  //     $( "#txtPopupCantidad" ).empty();
  //         $( "#txtPopupCantidad" ).append( document.createTextNode( this.cantidadAñadido ));
  //   }
  //   }
  //   console.log(this.carrito)
  // if(this.carrito[index].cantidadMaxima>0){
  // $.each(this.carrito, function(index, value) {
  //   content +='<label for="total">'+this.carrito[index].nombreProducto+'</label>' 
  //   content +=  '<div class="row mt-2 mb-2"><button onclick="agregar('+this.carrito[index].idProducto+')" class="btn btn-outline-warning ml-4">+</button>';
  //   content+='<div class="col-4 "><input type="text" value="'+this.carrito[index].cantidadAñadido+'" class=" text-center form-control" aria-label="Recipientusername with two button addons" aria-describedby="button-addon1" readonly></div>';
  //   content+='<button onclick="quitar('+this.carrito[index].idProducto+')" class="btn btn-outline-warning ">-</button></div>';
  // });
  // content+='<label for="total">Total:</label>$<input type="text" class="subtotal"id="subtotal" readonly value=" '+total+' ""></div>'
  // content +=  '<div class="container"><button type="button" id="btnComprar" class="btn text-white btn-block mt-3" data-toggle="modal" data-target="#exampleModal" style="background-color: #4abaa5;">comprar</button></div>';
  // $(popUpCarrito).attr('data-content', content);
  // $(popUpCarrito).popover('show');  
  // } 
  //   }
}
