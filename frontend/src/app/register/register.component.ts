import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { DataService } from '../service/data.service';
import { User } from '../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formData: User = {
    name: '',
    lastName: '',
    email: '',
    password: ''
  }

  constructor(private data: DataService) { }

  ngOnInit() {
    this.formData;
  }

  resetForm = (form?: NgForm) => {
    if (form)
      form.resetForm();
    this.formData = {
      id: null,
      name: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  onSubmit = (form: NgForm) => {
    console.log({ ...form.value })
  }

}
