import { Component, OnInit } from '@angular/core';
import { Post } from './model/post';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataService.getPost(this.route.snapshot.params['id'])
      .subscribe((response: Post) => {
        this.post = response
        this.dataService.getUser(response.userID).subscribe((userData: User) => {
          let name = userData.name + ' ' + userData.lastName
          this.post = { ...response, userName: name }
        })
      })
  }
}
