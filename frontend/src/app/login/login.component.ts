import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { NgForm } from '@angular/forms'
import { User } from '../model/user';
import { AuthServiceService } from '../service/auth-service.service';

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

  user: User;

  constructor(private service: AuthServiceService) { }

  ngOnInit() {
    this.formData;
  }

  onSubmit = (form: NgForm) => {
    let data = { ...form.value }
    const { email, password } = data
    this.service.login(email, password)
  }
}
