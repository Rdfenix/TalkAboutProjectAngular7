import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { Post } from '../model/post';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CommentComponent>, @Inject(MAT_DIALOG_DATA) public data: Post ) { }

  onClose = (): void => this.dialogRef.close();

  ngOnInit() {
  }

}
