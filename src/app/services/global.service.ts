import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private url: string;

  constructor( private http: HttpClient ) {
    // this.url = 'http:localhost:8000/api/';
    this.url = 'https://reqres.in/api/';
  }

  getUser() {
    return this.http.get(this.url + 'users');
  }

  postRegister(data: any) {
  }
}
