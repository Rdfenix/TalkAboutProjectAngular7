import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../model/user';
import { NgForm } from '@angular/forms';
import { validateIsEmpty } from '../utils/utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide: boolean = true
  showLoading: boolean = false;
  formData: User = {
    name: '',
    lastName: '',
    email: '',
    password: ''
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
    this.showLoading = true
    if (validateIsEmpty(data)) {
      this.toastr.warning("form is empty")
    } else {
      this.dataService.createUser(data).subscribe(resp => {
        if (!validateIsEmpty(resp)) {
          this.toastr.success("User created")
          this.showLoading = false
          this.resetForm();
        } else {
          this.showLoading = false
          this.toastr.error("Is not possible create user")
        }
      })
    }
  }

  constructor(private dataService: DataService, private toastr: ToastrService) { }

  ngOnInit() {
    this.formData
  }

}
