import { Component, OnInit, signal } from '@angular/core';

import { TaskInterface } from '@shared/task.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  list = signal<TaskInterface[]>([
    {
      id: 1,
      title: 'home',
      completed: false,
    },
  ]);

  counter = signal<number>(21);

  addTask(nameTask: string) {
    this.list.update((list) => [
      ...list,
      { id: 2, title: nameTask, completed: false },
    ]);
  }

  constructor() {}

  ngOnInit(): void {}
}
