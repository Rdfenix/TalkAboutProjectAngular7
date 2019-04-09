import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formData: User = {
    name: "",
    lastName: "",
    email: "",
    password: ""
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.clear()
  }

  clear = () => this.formData

  submitForm = (form: NgForm) => { }

}
