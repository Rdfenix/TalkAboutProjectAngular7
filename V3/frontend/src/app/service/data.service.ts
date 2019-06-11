import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_TALK } from './api';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllPosts = () => this.http.get(`${API_TALK}/posts`)
  getUser = (id: string) => this.http.get(`${API_TALK}/users/${id}`)
  getPost = (id: number) => this.http.get(`${API_TALK}/posts/${id}`)
  userLogin = (email: string, password: string) => this.http.get(`${API_TALK}/users?email=${email}&password=${password}`)
  createUser = (data: object) => this.http.post(`${API_TALK}/users`, data)
  createPost = (data: object) => this.http.post(`${API_TALK}/posts`, data)
  getAllComments = (id: number) => this.http.get(`${API_TALK}/comments?postID=${id}`)
  createComment = (data: object) => this.http.post(`${API_TALK}/comments`, data)
  deletePost = (id: number) => this.http.delete(`${API_TALK}/posts/${id}`)
  deleteComment = (id: number) => this.http.delete(`${API_TALK}/comments/${id}`)

}