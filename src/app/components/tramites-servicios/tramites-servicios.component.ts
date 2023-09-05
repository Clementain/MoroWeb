import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('accordionContainer', { static: true }) accordionContainer!: ElementRef;

  constructor(private _documentosService: DocumentosService, private _encargadosService: EncargadosService) { }

  ngOnInit(): void {
    this.getDocumentos();
    this.getEncargados();
  }

  scrollToElements(elementId: string) {
    const element = this.accordionContainer.nativeElement.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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

}


