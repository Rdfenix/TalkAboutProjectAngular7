import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers = () => this.http.get('http://localhost:3000/users')
  getOneUser = (userId: number) => this.http.get(`http://localhost:3000/users/${userId}`)

  getComments = () => this.http.get('http://localhost:3000/comments')
  getOneComment = (postId: number) => this.http.get(`http://localhost:3000/posts/${postId}`)

  getPosts = () => this.http.get('http://localhost:3000/posts')

}
