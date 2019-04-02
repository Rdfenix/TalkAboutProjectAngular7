import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { DataService } from '../service/data.service';
import { NgForm } from '@angular/forms'
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';

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

  constructor(private _auth: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.formData;
  }

  onSubmit = (form: NgForm) => {
    let data = { ...form.value }
    const { email, password } = data
    this._auth.login({ email, password })
  }

}
