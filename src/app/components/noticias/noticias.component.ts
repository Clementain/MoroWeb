import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Noticias } from 'src/app/interfaces/noticias';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  listNoticias: Noticias[] = [];
  selectedYear: string | null = null;

  constructor(private _noticiasService: NoticiasService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getNoticias();
  }

  getNoticias() {
    this._noticiasService.getListNoticias().subscribe(data => {
      // Convierte las fechas de tipo string a objetos Date
      data.forEach((noticia: Noticias) => {
        noticia.fecha = new Date(noticia.fecha);
      });

      // Filtrar las noticias por año seleccionado
      if (this.selectedYear) {
        this.listNoticias = data.filter((noticia: Noticias) => {
          return noticia.fecha.getFullYear().toString() === this.selectedYear;
        });
      } else {
        this.listNoticias = data;
      }
    }, error => {
      console.log(error);
    });
  }

  filterByYear(year: string | null) {
    this.selectedYear = year;
    this.getNoticias();
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
