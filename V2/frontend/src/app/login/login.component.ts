import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { NgForm } from '@angular/forms'
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.formData
  }

  onSubmit = (form: NgForm) => {
    let data = { ...form.value }
    this.dataService.userLogin(data.email, data.password).subscribe((response: User) => {
      if (response == "") {
        console.log("not possible")
      } else {
        sessionStorage.setItem('email', response[0].email)
        sessionStorage.setItem('userID', response[0].id)
      }
    })
  }

}
