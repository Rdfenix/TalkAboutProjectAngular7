import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private isLogged: Subscription;
  public userLogged: boolean;

  constructor(private _auth: AuthService, private route: Router) { }

  ngOnInit() {
    this.userLogged = this._auth.logged;
    this.isLogged = this._auth.getAuth().subscribe(value => this.userLogged = value)
  }

  logout = () => {
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('userID')
    sessionStorage.removeItem('resgitred')
    this._auth.callNextState(false)
    this.route.navigateByUrl('/')
  }

  ngOnDestroy() {
    if (this.isLogged) {
      this.isLogged.unsubscribe
    }
  }

}
