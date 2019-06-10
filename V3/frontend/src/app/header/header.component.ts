import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public userLogged: boolean;
  private isLogged: Subscription;

  constructor(private _auth: AuthService, private route: Router) { }

  logout = () => {
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('userID')
    sessionStorage.removeItem('resgitred')
    this._auth.callNextState(false)
    this.route.navigateByUrl('/')
  }

  ngOnInit() {
    this.userLogged = this._auth.logged;
    this.isLogged = this._auth.getAuth().subscribe(value => this.userLogged = value)
  }

  ngOnDestroy() {
    if (this.isLogged) {
      this.isLogged.unsubscribe
    }
  }

}
