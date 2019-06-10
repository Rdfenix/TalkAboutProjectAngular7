import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { validateIsEmpty } from '../utils/utils';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  formData: User = {
    email: '',
    password: ''
  }

  constructor(private dataService: DataService, private route: Router, private toastr: ToastrService, private _auth: AuthService) { }


  onSubmit = (form: NgForm) => {
    let data = { ...form.value }
    this.dataService.userLogin(data.email, data.password).subscribe((response: User) => {
      if (validateIsEmpty(response)) {
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

  ngOnInit() {
    this.formData
  }

}
