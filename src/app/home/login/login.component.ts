import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/AuthService.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
username!: string;
password!: string;

constructor(private router:Router,private authService: AuthService){}

login(){
  if(this.username == "admin" && this.password == "admin"){
this.authService.setUserRole('admin');
    this.router.navigate(['admin-menu'])

  }
}

}
