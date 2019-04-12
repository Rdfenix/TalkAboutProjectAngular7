import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { Post } from '../model/post';
import { DataService } from 'src/app/data.service';
import { Comment } from 'src/app/model/comment';
import { User } from 'src/app/model/user';
import { validateIsEmpty } from 'src/app/utils/utils';
import { NgForm } from '@angular/forms'

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

  constructor(public dialogRef: MatDialogRef<CommentComponent>, @Inject(MAT_DIALOG_DATA) public data: Post, private dataService: DataService) { }

  onClose = (): void => this.dialogRef.close();

  loadComments = () => this.dataService.getAllComments().subscribe((response: Comment[]) => {

    if (validateIsEmpty(response)) {
      console.log("Não tem itens")
    } else {

      response.map(item => {
        this.dataService.getUser(item.userID).subscribe((user: User) => {
          let userName = user.name + ' ' + user.lastName
          this.comments.push({ ...item, userName: userName })
        })
      })

    }
  })

  postComment = (form: NgForm) => {

    let data = { ...form.value }

    this.formData.postID = this.data.id;

    console.log(this.formData)

    // if (!validateIsEmpty(data)) {
    //   this.dataService.createComment(data).subscribe(resp => {
    //     if (validateIsEmpty(resp)) {
    //       console.log("vazio")
    //     } else {
    //       this.loadComments()
    //     }
    //   })
    // }
  }

  ngOnInit() {
    this.formData;
    this.loadComments();
  }

}
