import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/AuthService.component';

declare var $: any;

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  constructor( private router: Router, private authService: AuthService) {}

  data:any=[];
  total = 0;
  cantidadTotal=0;
  ngOnInit(): void {
      const dataFromLocalStorage = localStorage.getItem('data');
      if (dataFromLocalStorage !== null) {
          this.data=JSON.parse(dataFromLocalStorage);    
      }  
      this.data.forEach((dataCarrito:any )=> {
          this.total+= dataCarrito.precio * dataCarrito.cantidadAdded;
          this.cantidadTotal+= dataCarrito.cantidadAdded;
      });
      this.total =Number( this.total.toFixed(2));

    }
    comprar(){
      if(this.authService.getUserRole() == 'user'){
        this.router.navigate(['pago']);
      }else{
        this.router.navigate(['login']);
      }
    }
    agregar(id:number){
        let index = this.data.findIndex((producto: any) => producto.idProducto === id);
        if (index !== -1) {
          if(this.data[index].cantidadAdded<this.data[index].cantidadMaxima){
          this.data[index].cantidadAdded++;
          this.total+= Number((this.data[index].precio).toFixed(2));
          this.total =Number( this.total.toFixed(2));
          this.cantidadTotal+= 1;


          }
        }
        localStorage.setItem('data', JSON.stringify(this.data));

      }
      
    
    quitar(id:number){
      let index = this.data.findIndex((producto: any) => producto.idProducto === id);
      // console.log(index);
      if (index !== -1) {
        if(this.data[index].cantidadAdded>1){
        this.data[index].cantidadAdded--;
        this.total-= Number((this.data[index].precio).toFixed(2));
        this.total =Number( this.total.toFixed(2));
        this.cantidadTotal-= 1;

        }
      }
      localStorage.setItem('data', JSON.stringify(this.data));

    }
    eliminar(id:number){
      localStorage.removeItem('data');
      this.total=0;
      let index = this.data.findIndex((producto: any) => producto.idProducto === id);
      this.total+= this.data[index].precio * this.data[index].cantidadAdded;
        this.cantidadTotal-= this.data[index].cantidadAdded;
      this.data.splice(index,1);
  
    $( "#txtPopupCantidad" ).empty();
    $( "#txtPopupCantidad" ).append( document.createTextNode( this.data.length.toString() ));
    
    localStorage.setItem('data', JSON.stringify(this.data));
    }
}