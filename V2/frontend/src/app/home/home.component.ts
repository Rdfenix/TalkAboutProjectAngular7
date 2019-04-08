import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from './post';
import { User } from '../model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[] = []

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getAllPosts().subscribe((response: Post[]) => {
      response.map(item => {
        this.service.getUser(item.userID).subscribe((data: Post) => {
          let userName = data.name + ' ' + data.lastName;
          let dataCard = { ...item, userName: userName }
          this.posts.push(dataCard)
        })
      })
    })
  }

}
