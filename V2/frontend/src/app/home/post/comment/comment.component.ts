import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { Post } from '../model/post';
import { DataService } from 'src/app/data.service';
import { Comment } from 'src/app/model/comment';
import { User } from 'src/app/model/user';
import { validateIsEmpty } from 'src/app/utils/utils';
import { NgForm } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: Comment[] = []

  formData: Comment = {
    commentary: ""
  }

  constructor(public dialogRef: MatDialogRef<CommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Post, private dataService: DataService, private toastr: ToastrService) { }

  onClose = (): void => this.dialogRef.close();

  loadComments = () => this.dataService.getAllComments(this.data.id).subscribe((response: Comment[]) => {
    this.comments = [];
    if (!validateIsEmpty(response))
      response.map(item => {
        this.dataService.getUser(item.userID).subscribe((user: User) => {
          let userName = user.name + ' ' + user.lastName
          this.comments.push({ ...item, userName: userName })
        })
      })
  })

  postComment = (form: NgForm) => {

    let data = { ...form.value }

    if (!validateIsEmpty(data)) {

      this.formData.postID = this.data.id;
      this.formData.userID = "2"
      this.formData = { ...this.formData, ...data }

      this.dataService.createComment(this.formData).subscribe(resp => {
        if (!validateIsEmpty(resp)) {
          this.resetForm();
          this.loadComments()
        }
      })

    }
  }

  resetForm = (form?: NgForm) => {
    if (form)
      form.resetForm();
    this.formData = {
      commentary: ""
    }
  }

  ngOnInit() {
    this.formData;
    this.loadComments();
  }

}
