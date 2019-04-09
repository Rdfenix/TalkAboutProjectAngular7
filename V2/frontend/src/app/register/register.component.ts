import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { validateIsEmpty } from '../utils/utils';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private data: DataService, private toastr: ToastrService) { }

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
    let data = { ...form.value }
    if (validateIsEmpty(data)) {
      this.toastr.warning("form is empty")
    } else {
      this.data.createUser(data).subscribe(resp => {
        if (!validateIsEmpty(resp)) {
          this.toastr.success("User created")
          this.resetForm();
        } else {
          this.toastr.error("Is not possible create user")
        }
      })
    }
  }

}
