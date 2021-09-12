import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) { }

canActivate(route: ActivatedRouteSnapshot) {
    
  if (this.authenticationService.isLoggedIn()) {
      // logged in so return true

 
      if( route.data.role &&this.authenticationService.getRole()==route.data.role || route.data.role2 &&this.authenticationService.getRole()==route.data.role2)
      return true;

      // if(this.authenticationService.getRole().length !=0)
  }

  // not logged in so redirect to login page with the return url
  if(route.data.role == "admin")
  this.router.navigate(['admin-login']);
  if(route.data.role == "user")
  this.router.navigate(['check-login']);
  return false;
}
}