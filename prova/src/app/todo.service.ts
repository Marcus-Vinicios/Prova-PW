import { Injectable } from '@angular/core';
import { Todo } from './todo'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private url = 'https://jsonplaceholder.typicode.com/todos';

  getTodo(){
      return this.http.get<Todo[]>(this.url);
  }

  constructor(private http: HttpClient) { }
}
