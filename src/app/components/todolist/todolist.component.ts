import { Component, computed, inject, OnInit, Signal, signal } from '@angular/core';
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
  completedList = computed<ToDoList[]>(() => this.toDoList().filter(item => item.completed));
  incompletedList = computed<ToDoList[]>(() => this.toDoList().filter(item => !item.completed));
  toDoList = signal<ToDoList[]>([]);
  #toDoServiceList = inject(TodoService);

  ngOnInit(): void {
    this.toDoListData()
  }

  completedToDoList() {

  }

  toDoListData() {
    this.#toDoServiceList.getTodoDetails().subscribe(
      (data) => {
        this.toDoList.set(data);
      }
    );
  }

}
