import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo/todo.service';

interface toDoList {
  id: number | null;
  title: string | null;
  completed: string | null;
}

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent implements OnInit {
toDoList: any;
#toDoServiceList = inject(TodoService)

ngOnInit(): void {
  this.toDoListData()
}

toDoListData(){
  this.#toDoServiceList.getTodoDetails().subscribe(
    (data) => {
      this.toDoList = data
    },
    (error) => {
      console.log('Cant able to fetch', error);    
    }
  )
}

}
