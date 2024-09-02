import {
  Component,
  OnInit,
  signal,
  input,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { TaskInterface } from '@shared/task.model';
import { FormControl } from '@angular/forms';
/* Data model */

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
})
export class ListTaskComponent implements OnInit {
  listTask = input<TaskInterface[]>();
  counter = signal<number>(0);
  checkedTask = output<TaskInterface>();
  updateLabel = output<TaskInterface>();

  editTask = new FormControl();

  checkTask(task: TaskInterface) {
    this.checkedTask.emit({ ...task, completed: !task.completed });
  }

  updateTask(
    outerInput: OutputEmitterRef<TaskInterface | string>,
    task: TaskInterface,
    property: string,
    valueUpdate: string | boolean,
  ) {
    if (valueUpdate !== '') {
      outerInput.emit({ ...task, [property]: valueUpdate });
    }
  }

  showHideInput(labelElement: string) {
    const liElement = document.getElementById(labelElement);
    console.log(liElement);

    if (!liElement) return;
    const inputElement = liElement?.children[1] as HTMLInputElement;
    liElement.classList.toggle('editing');
    inputElement?.focus();
  }
  /*
  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('listTask')) {
    }
  }
*/
  constructor() {}

  ngOnInit(): void {}
}
