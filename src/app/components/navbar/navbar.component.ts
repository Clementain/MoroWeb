import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private el: ElementRef) { }
  activeLink: string = '';

  scrollTo(sectionId: string) {
    this.activeLink = sectionId;
  }
}