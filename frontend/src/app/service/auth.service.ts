import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { UserInterface } from './user-interface';
import { User } from '../model/user';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private showNavItems: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private _router: Router, private _data: DataService, private _toastr: ToastrService) { }

  get isLoggedIn() {
    return this.showNavItems.asObservable();
  }

  public login(user: UserInterface) {
    if (user.email !== '' && user.password !== '') {
      const { email, password } = user
      this._data.getUserLogin(email, password).subscribe((resp: User) => {
        localStorage.removeItem('email')

        if (resp == "") {
          this._toastr.warning("User not found or dont exits")
        } else {
          this.showNavItems.next(true);
          this._router.navigate(['/']);
        }
      })
    }
  }
}
