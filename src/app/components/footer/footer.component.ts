import { Component, output, input, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  counterTask = input.required<number>();
  filter = output<string>();
  cleanTasks = output();
  setFilter(valFilter: 'all' | 'pending' | 'completed') {
    this.filter.emit(valFilter);
  }

  clearListTasks() {
    this.cleanTasks.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
