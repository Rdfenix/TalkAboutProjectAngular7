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
}
