import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/AuthService.component';
// import Swal from 'sweetalert2'

declare var Swal: any;

declare var $: any;

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent {
  constructor( private router: Router, private authService: AuthService) {}
data:any=[];
  showBankingForm = false;
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
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Compra realizada con éxito',
      showConfirmButton: false,
      timer: 1500
    }).then((result: any) => {
      localStorage.clear();
      this.router.navigate(['carrito']);      
    })
  }

   
}
