import { Component, input, OnInit, output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = output<string>();
  nameTask = new FormControl(); /*
   * send task name to parent|
   */
  public sendNewTask() {
    let newTitle = this.nameTask.value;
    if (newTitle.trim() !== '') {
      this.title.emit(newTitle);
      this.nameTask.setValue('');
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
