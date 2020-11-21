import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      The title is: {{ title }}
    </p>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello angular!';

  newTitle = 'I love coding';

  constructor() {
    this.changeTitle(this.newTitle);
  }

  ngOnInit(): void {
  }

  changeTitle(newTitle: string): void {
   this.title = newTitle;
  }

}
