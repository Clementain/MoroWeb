import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Eventos } from 'src/app/interfaces/eventos';
import { Noticias } from 'src/app/interfaces/noticias';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  listeventos: Eventos[] = [];

  constructor(private _eventosService: EventosService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getNoticias();
  }

  getNoticias() {
    this._eventosService.getListEvento().subscribe(data => {
      // Convierte las fechas de tipo string a objetos Date
      data.forEach((noticia: Noticias) => {
        noticia.fecha = new Date(noticia.fecha);
      });


      this.listeventos = data;

    }, error => {
      console.log(error);
    });
  }



  convertBinaryToUrl(binaryValue: string): string | null {
    if (binaryValue === 'null' || binaryValue === "bnVsbA==") {
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
