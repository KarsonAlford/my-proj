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
  
  // [ ] means property binding - C to D
  // ( ) means event binding - D to C
  
  name = 'Angular';
  grassColor = 'green';
  username = 'default';
  customers = [
    { id: 1, name: 'David' },
    { id: 2, name: 'Dolph' },
    { id: 3, name: 'Canning' },
    { id: 4, name: 'Stewart' },
  ];

  changeGrassColor() {
    if (this.grassColor == 'blue'){
      this.grassColor = 'green';
      return;
    }
    this.grassColor = 'blue';
  }
}
