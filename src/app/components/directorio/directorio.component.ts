import { Component, OnInit } from '@angular/core';
import { Directorios } from 'src/app/interfaces/directorios';
import { DirectoriosService } from 'src/app/services/directorios.service';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent implements OnInit {
  mostrarTIENDA = false;
  mostrarRESTAURANTE = false;
  mostrarHOTEL = false;
  mostrarAGENCIADEMOTOS = false;
  mostrarBAR = false;
  mostrarHOSPITAL = false;
  mostrarDOCTOR = false;
  mostrarURGENCIAS = false;
  mostrarCAFETERIA = false;
  mostrarSUPERMERCADO = false;
  mostrarZAPATERIA = false;
  mostrarMUEBLERIA = false;
  mostrarFUNERARIA = false;
  mostrarESCUELA = false;
  mostrarVETERINARIA = false;
  mostrarCARNICERIA = false;
  mostrarMOTOPARTES = false;
  mostrarCLUBDEMOTOS = false;
  botonActivo: string | null = null;
  imagenAmpliada = false;
  imagenAmpliadaUrl: string | null = null;
  listDirectorios: Directorios[] = [];

  constructor(private _directoriosService: DirectoriosService) { }
  ngOnInit(): void {
    this.botonActivo = 'HOTEL';
    this.getDirectorios();
    this.mostrarHOTEL = true;
  }

  mostrarImagenes(event: any) {
    const opcion = event?.target?.value;
    this.botonActivo = opcion;
    this.mostrarTIENDA = false;
    this.mostrarRESTAURANTE = false;
    this.mostrarHOTEL = false;
    this.mostrarAGENCIADEMOTOS = false;
    this.mostrarBAR = false;
    this.mostrarHOSPITAL = false;
    this.mostrarDOCTOR = false;
    this.mostrarURGENCIAS = false;
    this.mostrarCAFETERIA = false;
    this.mostrarSUPERMERCADO = false;
    this.mostrarZAPATERIA = false;
    this.mostrarMUEBLERIA = false;
    this.mostrarFUNERARIA = false;
    this.mostrarESCUELA = false;
    this.mostrarVETERINARIA = false;
    this.mostrarCARNICERIA = false;
    this.mostrarMOTOPARTES = false;
    this.mostrarCLUBDEMOTOS = false;

    if (opcion === 'TODOS') {
      this.mostrarHOTEL = true;
      this.mostrarRESTAURANTE = true;
      this.mostrarTIENDA = true;
      this.mostrarAGENCIADEMOTOS = true;
      this.mostrarBAR = true;
      this.mostrarHOSPITAL = true;
      this.mostrarDOCTOR = true;
      this.mostrarURGENCIAS = true;
      this.mostrarCAFETERIA = true;
      this.mostrarSUPERMERCADO = true;
      this.mostrarZAPATERIA = true;
      this.mostrarMUEBLERIA = true;
      this.mostrarFUNERARIA = true;
      this.mostrarESCUELA = true;
      this.mostrarVETERINARIA = true;
      this.mostrarCARNICERIA = true;
      this.mostrarMOTOPARTES = true;
      this.mostrarCLUBDEMOTOS = true;
    } else if (opcion === 'TIENDA') {
      this.mostrarTIENDA = true;
    } else if (opcion === 'RESTAURANTE') {
      this.mostrarRESTAURANTE = true;
    } else if (opcion === 'HOTEL') {
      this.mostrarHOTEL = true;
    } else if (opcion === 'AGENCIA DE MOTOS') {
      this.mostrarAGENCIADEMOTOS = true;
    } else if (opcion === 'BAR') {
      this.mostrarBAR = true;
    } else if (opcion === 'HOSPITAL') {
      this.mostrarHOSPITAL = true;
    } else if (opcion === 'DOCTOR') {
      this.mostrarDOCTOR = true;
    } else if (opcion === 'URGENCIAS') {
      this.mostrarURGENCIAS = true;
    } else if (opcion === 'CAFETERIA') {
      this.mostrarCAFETERIA = true;
    } else if (opcion === 'SUPER MERCADO') {
      this.mostrarSUPERMERCADO = true;
    } else if (opcion === 'ZAPATERIA') {
      this.mostrarZAPATERIA = true;
    } else if (opcion === 'MUEBLERIA') {
      this.mostrarMUEBLERIA = true;
    } else if (opcion === 'FUNERARIA') {
      this.mostrarFUNERARIA = true;
    } else if (opcion === 'ESCUELA') {
      this.mostrarESCUELA = true;
    } else if (opcion === 'VETERINARIA') {
      this.mostrarVETERINARIA = true;
    } else if (opcion === 'CARNICERIA') {
      this.mostrarCARNICERIA = true;
    } else if (opcion === 'MOTO PARTES') {
      this.mostrarMOTOPARTES = true;
    } else if (opcion === 'CLUB DE MOTOS') {
      this.mostrarCLUBDEMOTOS = true;
    }
  }


  mostrarImagenAmpliada(imagen: string) {
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

  convertBinaryToUrl(binaryValue: string | null): string | null {
    if (binaryValue === 'null' || binaryValue === "bnVsbA==" || binaryValue === null) {
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
