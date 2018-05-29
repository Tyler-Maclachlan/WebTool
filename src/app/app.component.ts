import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  open = false;

  activateMenu()  {
    this.open = !this.open;
  }

  deactivateMenu()  {
    this.open = false;
  }
}
