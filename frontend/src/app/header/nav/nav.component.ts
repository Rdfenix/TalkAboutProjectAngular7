import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { LoginLogoutService } from 'src/app/service/login-logout.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  private isLogged: Subscription;
  public userLogged: boolean;

  constructor(private _auth: AuthService, private _loginService: LoginLogoutService) { }

  ngOnInit() {
    this.userLogged = this._auth.logged;
    this.isLogged = this._auth.getAuth().subscribe(value => this.userLogged = value)
  }

  ngOnDestroy() {
    if (this.isLogged) {
      this.isLogged.unsubscribe
    }
  }

  logout = () => {
    this._loginService.logout()
  }

}
