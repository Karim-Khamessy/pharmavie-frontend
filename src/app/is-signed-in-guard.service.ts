import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsSignedInGuardService implements CanActivate {

  constructor(private _router : Router) { }
  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot){
    const isSignedIn = localStorage.getItem('phamravie_token') ; 
   (isSignedIn == null) ? null : this._router.navigate(["landingPage"]) ; 
    return (isSignedIn == null ); 
  }
}
