import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { NgForm } from '@angular/forms'
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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

  constructor(private dataService: DataService, private _auth: AuthService, private route: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.formData
  }

  onSubmit = (form: NgForm) => {
    let data = { ...form.value }
    this.dataService.userLogin(data.email, data.password).subscribe((response: User) => {
      if (response == "") {
        this.toastr.warning('User not found')
      } else {
        sessionStorage.setItem('email', response[0].email)
        sessionStorage.setItem('userID', response[0].id)
        sessionStorage.setItem('resgitred', 'true')
        this._auth.callNextState(Boolean(sessionStorage.getItem('resgitred')))
        this.route.navigate(['/home'])
      }
    })
  }

}
