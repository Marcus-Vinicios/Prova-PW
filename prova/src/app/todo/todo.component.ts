import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo[]=[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  getTodo() {
    this.todoService.getTodo().subscribe(todo => this.todo = todo)
  }

}
