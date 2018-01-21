import { Component } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { map } from 'rxjs/operators';
import {Observable} from "rxjs";
import {Todo, TodoService} from "./todo.service";


@Component({
  selector: 'todo-component',
  templateUrl: 'todo.component.html',
})
export class TodoComponent {
  todos: Observable<Todo[]>;
  singleTodo$: Observable<Todo>;

  constructor(
    private todoService: TodoService
    ) {
  }

  ngOnInit() {
    this.todos = this.todoService.todos;
    this.singleTodo$ = this.todoService.todos.pipe(
      map(todos => todos.find(item => item.id === '1'))
    );

    this.todoService.loadAll();
    //this.todoService.load('1');
  }
  create() {
    let todo:Todo = <Todo>{};
    this.todoService.create(todo);
  }
  deleteTodo(todoId: number) {
    this.todoService.remove(todoId);
  }
}
