import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { NgForm } from '@angular/forms'
import { User } from '../model/user';

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

  constructor(private data: DataService) { }

  ngOnInit() {
    this.formData;
  }

  onSubmit = (form: NgForm) => {
    console.log({ ...form.value })
  }

}
