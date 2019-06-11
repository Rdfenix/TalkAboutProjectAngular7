import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { NgForm } from '@angular/forms';
import { validateIsEmpty } from '../utils/utils';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  postData: Post = {
    title: "",
    post: "",
    userID: ""
  }
  showLoading: boolean = false;

  sendForm = (form: NgForm) => {

    let data = { ...form.value }
    this.showLoading = true

    if (validateIsEmpty(data)) {
      this.toastr.warning("form is empty")
    } else {
      let userID = sessionStorage.getItem('userID')
      this.postData.userID = userID;
      this.postData = { ...this.postData, ...data }

      this.dataService.createPost(this.postData).subscribe(resp => {
        if (!validateIsEmpty(resp)) {
          this.showLoading = false
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

  constructor(private route: Router, private dataService: DataService, private toastr: ToastrService) { }

  ngOnInit() {
    this.postData;
  }

}
