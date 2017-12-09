import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface Todo {
  id: number | string;
  createdAt: number;
  value: string;
}

@Injectable()
export class TodoService {
  todos: Observable<Todo[]> // 관제 가능한 투두리스트 목록
  private _todos: BehaviorSubject<Todo[]>;
  private baseUrl: string;
  private dataStore: {
    todos: Todo[]
  };

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://56e05c3213da80110013eba3.mockapi.io/api';
    this.dataStore = { todos: [] }; // 데이터 스토어에는 관제 가능한 투두 목록이 있다.
    this._todos = <BehaviorSubject<Todo[]>>new BehaviorSubject([]); // next 로 값을 변경할수 있는 비해비어 서브젝트
    this.todos = this._todos.asObservable(); //데이터 스토어의 스트림은 별도 변수에 전달 된다.
  }

  loadAll() {
    this.http.get(`${this.baseUrl}/todos`).subscribe(data => {

      this.dataStore.todos = <Todo[]>data; // 결과 값은 데이터 소스에 담는다.
      this._todos.next(Object.assign({}, this.dataStore).todos); // 데이터 소스를 복제하여 별도 투두목에 담아서 비해베어 서브젝트에 넥스트 시킨다.
    }, error => console.log('Could not load todos.'));
  }

  load(id: number | string) {
    this.http.get(`${this.baseUrl}/todos/${id}`).subscribe(data => {
      let notFound = true;
      let todo:Todo = <Todo>data;
      this.dataStore.todos.forEach((item, index) => {
        if (item.id === todo.id) {
          this.dataStore.todos[index] = <Todo>data;
          notFound = false;
        }
      });

      if (notFound) {
        this.dataStore.todos.push(<Todo>data);
      }

      this._todos.next(Object.assign({}, this.dataStore).todos);
    }, error => console.log('Could not load todo.'));
  }

  create(todo: Todo) {
    this.http.post(`${this.baseUrl}/todos`, JSON.stringify(todo)).subscribe(data => {
      this.dataStore.todos.push(<Todo>data);
      this._todos.next(Object.assign({}, this.dataStore).todos);
    }, error => console.log('Could not create todo.'));
  }

  update(todo: Todo) {
    this.http.put(`${this.baseUrl}/todos/${todo.id}`, JSON.stringify(todo)).subscribe(data => {
      this.dataStore.todos.forEach((t, i) => {
        let todo:Todo = <Todo>data;
        if (t.id === todo.id) { this.dataStore.todos[i] = <Todo>data; }
      });

      this._todos.next(Object.assign({}, this.dataStore).todos);
    }, error => console.log('Could not update todo.'));
  }

  remove(todoId: number) {
    this.http.delete(`${this.baseUrl}/todos/${todoId}`).subscribe(response => {
      this.dataStore.todos.forEach((t, i) => {
        if (t.id === todoId) { this.dataStore.todos.splice(i, 1); }
      });

      this._todos.next(Object.assign({}, this.dataStore).todos);
    }, error => console.log('Could not delete todo.'));
  }
}
