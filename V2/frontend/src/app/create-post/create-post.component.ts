import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';
import { Post } from '../model/post';
import { NgForm } from '@angular/forms';
import { validateIsEmpty } from '../utils/utils';
import { Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private dataService: DataService, private toastr: ToastrService, private route: Router) { }

  postData: Post = {
    title: "",
    post: "",
    userID: ""
  }

  ngOnInit() {
    this.postData;
  }

  sendForm = (form: NgForm) => {

    let data = { ...form.value }

    if (validateIsEmpty(data)) {
      this.toastr.warning("form is empty")
    } else {
      let userID = '2'
      this.postData.userID = userID;
      this.postData = { ...this.postData, ...data }

      this.dataService.createPost(this.postData).subscribe(resp => {
        if (!validateIsEmpty(resp)) {
          this.resetForm()
        }
      })
    }
  }

  resetForm = (form?: NgForm) => {
    if (form)
      form.resetForm();
    this.postData = {
      title: '',
      post: '',
      userID: ''
    }
    this.route.navigate(['/home'])
  }

}
