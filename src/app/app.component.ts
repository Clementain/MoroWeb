import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Morole&oacute;n Guanajuato Administraci&oacute;n 2021 -2024';
  activeLink: string = '';

  setActiveLink(link: string) {
    this.activeLink = link;
  }
}
