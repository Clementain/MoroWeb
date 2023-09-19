import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent implements OnInit {
  mostrarTiendas = true;
  mostrarRestaurantes = true;
  mostrarHoteles = true;
  botonActivo: string | null = null;
  imagenAmpliada: string | null = null;

  ngOnInit(): void {
    this.botonActivo = 'todos';
  }

  mostrarImagenes(opcion: string) {
    this.botonActivo = opcion;
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

  mostrarImagenAmpliada(categoria: string) {
    this.imagenAmpliada = categoria;
  }

  cerrarImagenAmpliada() {
    this.imagenAmpliada = null;
  }
}
