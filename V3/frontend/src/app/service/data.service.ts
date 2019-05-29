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

}