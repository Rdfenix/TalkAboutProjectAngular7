import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  showNav: Observable<boolean>;

  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
    this.verifyLogin();
  }

  verifyLogin = () => {
    this.showNav = this.authService.isLoggedIn;
    console.log('teste', this.showNav)
  }

  logout = () => this.authService.logout();
}
