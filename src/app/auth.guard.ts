import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: RegisterService,private route:Router){}
  canActivate( route: ActivatedRouteSnapshot){
    const roles=route.data.role as Array<string>;
    const userDetails=this.auth.getUserDetails();
    if(userDetails && roles.includes(userDetails.role)){
    return true;
  }else{
    this.route.navigate(['/login'])
    
  }
    
  }
}
