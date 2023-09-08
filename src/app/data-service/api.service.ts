import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/data.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getPostData() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
