import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginLogoutService {

  constructor(private _data: DataService, private _toastr: ToastrService, private _auth: AuthService, private _router: Router) { }

  login = (email: string, pass: string) => {
    this._data.getUserLogin(email, pass).subscribe((user: User) => {
      if (user == '') {
        this._toastr.warning("User not found or dont exits")
      } else {
        sessionStorage.setItem('user', user[0].email)
        this._auth.callNextState(true);
        this._router.navigateByUrl('/')
      }
    })
  }

  logout = () => {
    sessionStorage.removeItem('user')
    this._router.navigate(['/login'])
  }
}
