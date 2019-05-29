import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/post';
import { User } from 'src/app/model/user';
import { Comment } from 'src/app/model/comment'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post;
  commentsLength: number = 0;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getComment()
    this.countComments()
  }

  getComment = () => this.dataService.getPost(this.route.snapshot.params['id'])
    .subscribe((response: Post) => {
      this.post = response
      this.dataService.getUser(response.userID).subscribe((userData: User) => {
        let name = userData.name + ' ' + userData.lastName
        this.post = { ...response, userName: name }
      })
    })

  countComments = () => this.dataService.getAllComments(this.route.snapshot.params['id']).subscribe((resp: Comment[]) => {
    this.commentsLength = resp.length;
  })

}
