import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[] = []

  constructor(private service: DataService) { }

  ngOnInit() {
    this.getPosts()
  }

  getPosts = () => {
    this.service.getAllPosts().subscribe((response: Post[]) => response.map(item => {
      this.service.getUser(item.userID).subscribe((data: Post) => {
        let userName = data.name + ' ' + data.lastName
        let card = { ...item, userName }
        this.posts.push(card)
      })
    }))
  }

}
