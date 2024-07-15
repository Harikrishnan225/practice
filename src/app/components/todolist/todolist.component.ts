import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../../services/todo/todo.service';
import { ToDoList } from '../../services/todo/todo';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent implements OnInit {
  completedList = signal<ToDoList[]>([]);
  incompletedList= signal<ToDoList[]>([]);
  #toDoServiceList = inject(TodoService);

  ngOnInit(): void {
    this.toDoListData()
  }

  toDoListData() {
    this.#toDoServiceList.getTodoDetails().subscribe(
      (data) => {
        if (data) {
          this.completedList.set(data.filter(item => item.completed));
          this.incompletedList.set(data.filter(item => !item.completed));
        }
      },
      (error) => {
        console.log('Cant able to fetch', error);
      }
    )
  }

}
