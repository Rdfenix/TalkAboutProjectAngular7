import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { User } from '../model/user';
import { LoginLogoutService } from '../service/login-logout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData: User = {
    email: '',
    password: ''
  }

  constructor(private _loginService: LoginLogoutService) { }

  ngOnInit() {
    this.formData;
  }

  onSubmit = (form: NgForm) => {
    let data = { ...form.value }
    const { email, password } = data
    this._loginService.login(email, password)

  }

}
