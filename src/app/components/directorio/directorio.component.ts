import { Component } from '@angular/core';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent {
  mostrarTiendas = true;
  mostrarRestaurantes = true;
  mostrarHoteles = true;

  mostrarImagenes(opcion: string) {
    this.mostrarTiendas = false;
    this.mostrarRestaurantes = false;
    this.mostrarHoteles = false;
    if (opcion === 'todos') {
      this.mostrarTiendas = true;
      this.mostrarRestaurantes = true;
      this.mostrarHoteles = true;
    } else if (opcion === 'tiendas') {
      this.mostrarTiendas = true;
    } else if (opcion === 'restaurantes') {
      this.mostrarRestaurantes = true;
    } else if (opcion === 'hoteles') {
      this.mostrarHoteles = true;
    }
  }
}
