import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TALK_API } from './api';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllPosts = () => this.http.get(`${TALK_API}/posts`)
  getUser = (id: string) => this.http.get(`${TALK_API}/users/${id}`)
  getPost = (id: number) => this.http.get(`${TALK_API}/posts/${id}`)
  userLogin = (email: string, password: string) => this.http.get(`${TALK_API}/users?email=${email}&password=${password}`)
  createUser = (data: object) => this.http.post('http://localhost:3000/users', data)

}
