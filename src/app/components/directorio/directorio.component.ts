import { Component, OnInit } from '@angular/core';
import { Directorios } from 'src/app/interfaces/directorios';
import { DirectoriosService } from 'src/app/services/directorios.service';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent implements OnInit {
  mostrarTIENDA = true;
  mostrarRESTAURANTE = true;
  mostrarHOTEL = true;
  botonActivo: string | null = null;
  imagenAmpliada=false;
  imagenAmpliadaUrl: string | null = null;
  listDirectorios: Directorios[] = [];

  constructor(private _directoriosService: DirectoriosService) { }
  ngOnInit(): void {
    this.botonActivo = 'TODOS';
    this.getDirectorios();
  }

  mostrarImagenes(opcion: string) {
    this.botonActivo = opcion;
    this.mostrarTIENDA = false;
    this.mostrarRESTAURANTE = false;
    this.mostrarHOTEL = false;

    if (opcion === 'TODOS') {
      this.mostrarHOTEL = true;
      this.mostrarRESTAURANTE = true;
      this.mostrarTIENDA = true;
    } else if (opcion === 'TIENDA') {
      this.mostrarTIENDA = true;
    } else if (opcion === 'RESTAURANTE') {
      this.mostrarRESTAURANTE = true;
    } else if (opcion === 'HOTEL') {
      this.mostrarHOTEL = true;
    }
  }

  mostrarImagenAmpliada( imagen:string) {
    this.imagenAmpliada = true;
    this.imagenAmpliadaUrl = imagen;
  }

  cerrarImagenAmpliada() {
    this.imagenAmpliada = false;
    this.imagenAmpliadaUrl = null;
  }

  getDirectorios() {
    this._directoriosService.getListdirectorios().subscribe(data => {
      this.listDirectorios = data;
    }, error => {
      console.log(error);
    });
  }

  convertBinaryToUrl(binaryValue: string|null): string | null {
    if (binaryValue === 'null' || binaryValue === "bnVsbA=="|| binaryValue === null) {
      return null;
    }
    const binaryData = atob(binaryValue);
    const bytes = new Uint8Array(binaryData.length);
    for (let i = 0; i < binaryData.length; i++) {
      bytes[i] = binaryData.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: 'image/jpeg' });
    return URL.createObjectURL(blob);
  }
}
