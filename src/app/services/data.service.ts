import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public httpModule: HttpClientModule, public http: HttpClient) { }

  public getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
