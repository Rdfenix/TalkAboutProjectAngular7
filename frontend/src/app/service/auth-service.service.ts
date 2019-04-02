import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { DataService } from './data.service';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router, private data: DataService, private toastr: ToastrService) { }

  login = (email: string, password: string) => {
    this.data.getUserLogin(email, password).subscribe((resp: User) => {
      if (resp == '') {
        this.toastr.warning("User not found or dont exits")
      }
      else {
        this.loggedIn.next(true);
        this.router.navigate(['/'])
      }
    })
  }

  logout = () => {
    this.loggedIn.next(false);
    this.router.navigate(['/'])
  }

}
