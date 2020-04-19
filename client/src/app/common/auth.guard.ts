import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardActivate implements CanActivate {
  constructor(private service: ApiService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.service.getToken("user")){
      if(this.service.getToken('city')){
        return true;
      }
      else{
        this.router.navigate(['/select-city']);
        return false;
      }
    }
    else{
      this.router.navigate(['home']);
      return false;
    }
  }
  
}


@Injectable({
  providedIn: 'root'
})
export class LoginActivate implements CanActivate {
  constructor(private service: ApiService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.service.getToken("user")){
      return true;
    }
    else{
      this.router.navigate(['/main/dashboard']);
      return false;
    }
  }
  
}



@Injectable({
  providedIn: 'root'
})
export class CityActivate implements CanActivate {
  constructor(private service: ApiService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.service.getToken("user")){
      return true;
    }
    else{
      this.router.navigate(['home']);
      return false;
    }
  }
  
}
