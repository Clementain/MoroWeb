import { Component, OnInit, ChangeDetectorRef, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { Noticias } from 'src/app/interfaces/noticias';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit, AfterViewChecked {
  listNoticias: Noticias[] = [];

  constructor(private _noticiasService: NoticiasService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getNoticias();
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  getNoticias() {
    this._noticiasService.getListNoticias().subscribe(data => {
      this.listNoticias = data;
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
