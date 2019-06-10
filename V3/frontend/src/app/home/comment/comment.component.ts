import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/model/comment';
import { DataService } from 'src/app/service/data.service';
import { validateIsEmpty } from 'src/app/utils/utils';
import { User } from 'src/app/model/user';
import { Post } from 'src/app/model/post';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  id: number = this.route.snapshot.params['id']
  title: string
  comments: Comment[] = []
  formData: Comment = {
    commentary: ""
  }

  loadComments = () => this.dataService.getAllComments(this.id).subscribe((response: Comment[]) => {
    if (!validateIsEmpty(response))
      response.map(item => this.dataService.getUser(item.userID).subscribe((user: User) => {
        let userName = user.name + ' ' + user.lastName
        this.comments.push({ ...item, userName: userName })
      }))
  })

  getTitleComment = () => this.dataService.getPost(this.id).subscribe((response: Post) => this.title = response.title)

  ngOnInit() {
    this.loadComments()
    this.getTitleComment()
  }

}
