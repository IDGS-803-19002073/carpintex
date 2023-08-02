import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../Auth/AuthService.component';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // EL CSS LO TOMA DE assets/css/templatemo-574-mexant
  // encapsulation: ViewEncapsulation.None // Remove encapsulation

  
})
export class HomeComponent {
  constructor(private authService: AuthService, private router: Router) {}
  public login = true;
  public logout = false;
  public pedidos = false;

  shoppingCart: boolean = false; // You can set this value based on your logic


  ngOnInit() {
    (document.body.style as any)['margin-left'] = '0px'; // Explicitly cast to 'any' to avoid the error
if(this.authService.getUserRole() == 'user'){
  // alert(this.authService.getUserRole());
  this.login = false;
    this.logout = true;
    this.pedidos = true;
    this.shoppingCart=true;
}
}
exit(){
  this.authService.setUserRole('');
  this.login = true;
  this.logout = false;
  this.pedidos = false;
  this.shoppingCart = false;
  this.router.navigate(['login']);
  

}

// Define the popover content as an HTML string
popoverContent: string = "<span class='text-white badge rounded-pill badge-notification bg-danger'>0</span> articulos añadidos";

ngAfterViewInit() {
  // Initialize the popover when the view is ready
  $('[data-toggle="popover"]').popover({
    html: true, // Enable HTML content
    placement: 'bottom',

    content: () => this.popoverContent // Use a function to provide the popover content dynamically
  });
}

}

