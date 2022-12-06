import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
constructor(private router : Router) {
  
}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      let isLogin = sessionStorage.getItem('IS_LOGIN') != null;
      if(!isLogin) {
        this.router.navigate(['/login'])
      }
    return isLogin;
  }
  
}
