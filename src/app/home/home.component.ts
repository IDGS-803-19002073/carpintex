import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../Auth/AuthService.component';
import { Router } from '@angular/router';

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
  public shoppingCart = false;


  ngOnInit() {
    (document.body.style as any)['margin-left'] = '0px'; // Explicitly cast to 'any' to avoid the error
if(this.authService.getUserRole() == 'user'){
  // alert(this.authService.getUserRole());
  this.login = false;
    this.logout = true;
    this.shoppingCart=true;
}
}
exit(){
  this.authService.setUserRole('');
  this.login = true;
  this.logout = false;
  this.shoppingCart = false;
  this.router.navigate(['login']);
  

}

}

