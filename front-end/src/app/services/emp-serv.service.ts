import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpServService {

  constructor(private http: HttpClient) {

  }


  getPosts() {
    return this.http.get<Response>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostsByID(ID: number) {
    return this.http.get<Response>('https://jsonplaceholder.typicode.com/posts/' + ID);
  }

  updatePost(ID: number) {
    let params = {
      "userId": 1,
      "id": 1,
      "title": "Test",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
    return this.http.put<Response>('https://jsonplaceholder.typicode.com/posts/' + ID, params);
  }
}
