import { Component, OnInit, signal } from '@angular/core';
import { TaskInterface } from '@shared/task.model';
/* Data model */

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
})
export class ListTaskComponent implements OnInit {
  listTask = signal<TaskInterface[]>([
    {
      id: 1,
      title: 'Task 1',
      completed: false,
    },
    {
      id: 2,
      title: 'Task 2',
      completed: false,
    },
  ]);

  constructor() {}

  ngOnInit(): void {}
}
