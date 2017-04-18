import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
/*  template: `
    <h1>Hello {{name}}</h1>
    <div [style.color]="grassColor">
      First Div Ever
    </div>
    <button (click)="changeGrassColor()">Change Grass Color</button>
  `*/
})
export class AppComponent  { 
  name = 'Angular';
  grassColor = 'green';

  changeGrassColor() {
    if (this.grassColor == 'blue'){
      this.grassColor = 'green';
      return;
    }
    this.grassColor = 'blue';
  }
}
