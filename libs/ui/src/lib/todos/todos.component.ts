import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@nx-myorg/data'

@Component({
  selector: 'nx-myorg-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() public todos: Todo[];

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
