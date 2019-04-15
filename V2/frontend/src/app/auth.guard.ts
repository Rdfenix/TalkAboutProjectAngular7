import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.validateAccess();
  }

  validateAccess = () => {
    let data = sessionStorage.getItem('userID')
    if (data != undefined || data != null) {
      return true
    } else {
      this.router.navigateByUrl('/')
    }
  }
}
