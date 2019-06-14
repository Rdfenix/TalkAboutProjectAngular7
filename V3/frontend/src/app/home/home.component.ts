import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { Comment } from '../model/comment'
import { DataService } from '../service/data.service';
import { ToastrService } from 'ngx-toastr';
import { validateIsEmpty } from '../utils/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[] = []

  constructor(private service: DataService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getPosts()
  }

  getPosts = () => {

    this.service.getAllPosts().subscribe((response: Post[]) => {
      this.posts = []
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

  deltePost = (id: number) => {
    let dataCard = this.posts.filter(item => item.id === id)

    if (dataCard[0].owner) {
      this.service.getAllComments(id).subscribe((response: Comment[]) => {
        if (!validateIsEmpty(response)) {
          response.map(data => this.service.deleteComment(data.id))
          this.deleteItem(id)
        } else {
          this.deleteItem(id)
        }
      })
    } else {
      this.toastr.error('That post is not your')
    }
  }

  deleteItem = (id: number) => {
    this.service.deletePost(id).subscribe(response => {
      this.posts = []
      this.getPosts()
      this.toastr.success('Post deleted')
    })
  }

}
