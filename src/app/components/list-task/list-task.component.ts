import { Component, OnInit, signal, input } from '@angular/core';
import { TaskInterface } from '@shared/task.model';
/* Data model */

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
})
export class ListTaskComponent implements OnInit {
  listTask = input<TaskInterface[]>();

  counter = signal<number>(0);
  constructor() {}

  ngOnInit(): void {}
}
