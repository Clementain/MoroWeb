import { Component } from '@angular/core';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent {
  mostrarTodos = false;
  mostrarTiendas = false;
  mostrarRestaurantes = false;
  mostrarHoteles = false;

  mostrarImagenes(opcion: string) {
    this.mostrarTodos = false;
    this.mostrarTiendas = false;
    this.mostrarRestaurantes = false;
    this.mostrarHoteles = false;

    if (opcion === 'todos') {
      this.mostrarTodos = true;
    } else if (opcion === 'tiendas') {
      this.mostrarTiendas = true;
    } else if (opcion === 'restaurantes') {
      this.mostrarRestaurantes = true;
    } else if (opcion === 'hoteles') {
      this.mostrarHoteles = true;
    }
  }
}
