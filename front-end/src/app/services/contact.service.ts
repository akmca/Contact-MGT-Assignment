import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = "http://localhost:5454/contacts";
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }

  getContactById(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.apiUrl}/${id}`);
  }

  addContact(cact: Contact): Observable<Response> {
    return this.http.post<Response>(this.apiUrl, cact);
  }

  saveContact(cact: Contact): Observable<Response> {
    return this.http.put<Response>(this.apiUrl, cact);
  }

  deleteById(id: number): Observable<Response> {
    return this.http.delete<Response>(`${this.apiUrl}/${id}`);
  }

  getPosts(){
    return this.http.get<Response>('https://jsonplaceholder.typicode.com/posts');
  }

 
  addEmpDetails() {
    let params = { "name": "Arun", "salary": "44444444", "age": "43" }
    return this.http.post<Response>('http://dummy.restapiexample.com/api/v1/create', params);
  }
  
}
