import { Component, OnInit, signal, computed } from '@angular/core';

import { TaskInterface } from '@shared/task.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  filter = signal<'all' | 'pending' | 'completed'>('all');
  list = signal<TaskInterface[]>([
    {
      id: 1,
      title: 'home',
      completed: false,
      editing: false,
    },
  ]);

  counter = computed((): number => this.list().length);

  addTask(nameTask: string) {
    this.list.update((list) => [
      ...list,
      {
        id: Math.floor(Math.random() * 100),
        title: nameTask,
        completed: false,
        editing: false,
      },
    ]);
  }

  checkedTask(taskId: TaskInterface) {
    this.list.update((tasks) =>
      tasks.map((task) => (task.id == taskId.id ? taskId : task)),
    );
  }

  taskByfilter = computed(() => {
    const filter = this.filter();
    const tasks = this.list();

    if (filter === 'pending') {
      console.log(tasks.filter((task) => !task.completed));

      return tasks.filter((task) => !task.completed);
    }
    if (filter === 'completed') {
      return tasks.filter((task) => task.completed);
    }

    return tasks;
  });

  constructor() {}

  ngOnInit(): void {}
}
