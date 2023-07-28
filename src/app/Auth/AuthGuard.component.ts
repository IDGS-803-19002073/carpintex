import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './AuthService.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRoles = route.data['roles'] as string[];
    const userRole = this.authService.getUserRole();


    if (expectedRoles.includes(userRole)) {
      return true;
    } else {
      // Si el usuario no tiene el rol necesario, redirigir a una página de acceso no autorizado
      this.router.navigate(['/unauthorized']);
      return false;
    }
  }
}
