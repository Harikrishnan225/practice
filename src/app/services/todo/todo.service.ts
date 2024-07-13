import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoList } from './todo';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users/1/todos';
  
  constructor(
    private http: HttpClient
  ) { }

  getTodoDetails(): Observable<ToDoList[]> {
    return this.http.get<ToDoList[]>(this.apiUrl);
  }
}
