import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  _isLogged: Observable<boolean>;

  constructor(private _auth: AuthService) { }

  ngOnInit() {
    this.validateNav
  }

  validateNav(){
    this._isLogged = this._auth.isLoggedIn;
    console.log(this._isLogged)
  }

}
