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
    this.service.getAllPosts().subscribe((response: Post[]) => {
      response.sort((a, b) => (a.id < b.id ? 1 : -1)) //realiza uma ordenação no array onde é descendente
      response.map(item => {
        this.service.getUser(item.userID).subscribe((data: Post) => {

          if (sessionStorage.getItem('userID') === String(item.userID)) {
            item.owner = true
          } else {
            item.owner = false
          }

          let userName = data.name + ' ' + data.lastName
          let card = { ...item, userName }
          this.posts.push(card)
        })
      })
    })
  }

}
