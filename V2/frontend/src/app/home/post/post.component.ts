import { Component, OnInit } from '@angular/core';
import { Post } from './model/post';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CommentComponent } from './comment/comment.component';
import { Comment } from 'src/app/model/comment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;
  commentsLength: number = 0;

  constructor(private dataService: DataService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataService.getPost(this.route.snapshot.params['id'])
      .subscribe((response: Post) => {
        this.post = response
        this.dataService.getUser(response.userID).subscribe((userData: User) => {
          let name = userData.name + ' ' + userData.lastName
          this.post = { ...response, userName: name }
        })
      })

    this.countComments();
  }

  countComments = () => {
    this.dataService.getAllComments(this.route.snapshot.params['id']).subscribe((resp: Comment[]) => {
      this.commentsLength = resp.length;
    })
  }

  openModal = (): void => {
    const dialogRef = this.dialog.open(CommentComponent, {
      width: '100%',
      height: '100%',
      data: { title: this.post.title, id: this.post.id }
    })
    dialogRef.afterClosed().subscribe(() => this.countComments())
  }

}
