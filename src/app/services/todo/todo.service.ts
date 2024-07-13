import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface toDoList {
  id: number | null;
  title: string | null;
  completed: string | null;
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users/1/todos';
  
  constructor(
    private http: HttpClient
  ) { }

  getTodoDetails(): Observable<toDoList> {
    return this.http.get<toDoList>(this.apiUrl);
  }
}
