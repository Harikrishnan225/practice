import { Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';

export const routes: Routes = [
    {
        path: 'students',
        loadComponent: () => import('./components/student/student.component').then(c => c.StudentComponent)
    },
    {
        path: 'todo',
        loadComponent: () => import('./components/todolist/todolist.component').then(c => c.TodolistComponent)
    }, 
    {
        path:'expenseDetails',
        loadComponent: () => import('./components/expense-details/expense-details.component').then(c => c.ExpenseDetailsComponent)
    }
];
