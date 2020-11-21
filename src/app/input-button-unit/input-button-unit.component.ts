import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      The title is: {{ title }}
    </p>
    <input [value]="generateTitle()">
    <p>{{ generateTitle() }}</p>
    <button>Save</button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello angular!';

  newTitle = 'Love coding';

  constructor() {
    this.changeTitle(this.newTitle);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.title = 'This title is not the title, which you are looking for!';
    }, 4000);
  }

  changeTitle(newTitle: string): void {
   this.title = newTitle;
  }

  generateTitle(): string {
    return 'This title was generate by title!';
  }
}
