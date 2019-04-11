import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CommentComponent>) { }

  onClose = (): void => this.dialogRef.close();

  ngOnInit() {
  }

}
