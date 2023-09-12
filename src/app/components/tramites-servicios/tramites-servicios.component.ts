import { Component, OnInit, HostListener } from '@angular/core';
import { Documentos } from 'src/app/interfaces/documentos';
import { Encargados } from 'src/app/interfaces/encargados';
import { DocumentosService } from 'src/app/services/documentos.service';
import { EncargadosService } from 'src/app/services/encargados.service';

@Component({
  selector: 'app-tramites-servicios',
  templateUrl: './tramites-servicios.component.html',
  styleUrls: ['./tramites-servicios.component.css']
})
export class TramitesServiciosComponent implements OnInit {
  listDocumentos: Documentos[] = [];
  listEncargados: Encargados[] = [];
  isLoading: boolean = false; 
  cachedDocuments: { [key: number]: Documentos[] } = {}; 

  constructor(private _documentosService: DocumentosService, private _encargadosService: EncargadosService) { }

  ngOnInit(): void {
    this.getEncargados();
  }

  getDocumentos() {
    this._documentosService.getListDocumentos().subscribe(data => {
      this.listDocumentos = data;
    }, error => {
      console.log(error);
    });
  }

  getEncargados() {
    this._encargadosService.getListEncargados().subscribe(data => {
      this.listEncargados = data;
    }, error => {
      console.log(error);
    });
  }

  convertBinaryToPdf(binaryValue: string): string | null {
    if (binaryValue === 'null' || binaryValue === "bnVsbA==") {
      return null;
    }
    const binaryData = atob(binaryValue);
    const bytes = new Uint8Array(binaryData.length);
    for (let i = 0; i < binaryData.length; i++) {
      bytes[i] = binaryData.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: 'application/pdf' });
    return URL.createObjectURL(blob);
  }

  getDocumentosByEncargadoId(encargadoId: number | undefined) {
    if (encargadoId === undefined) {
      return;
    }

    if (this.cachedDocuments[encargadoId]) {
      this.listDocumentos = this.cachedDocuments[encargadoId];
      return;
    }

    this.isLoading = true; 
    this._documentosService.getDocumentosByEncargadoId(encargadoId).subscribe(
      (data) => {
        this.listDocumentos = data;
        this.cachedDocuments[encargadoId] = data; 
        this.isLoading = false; 
      },
      (error) => {
        console.log(error);
        this.isLoading = false; 
      }
    );
  }

  clearAllCachedDocuments() {
    this.cachedDocuments = {};
  }
  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    this.clearAllCachedDocuments();
  }
}
