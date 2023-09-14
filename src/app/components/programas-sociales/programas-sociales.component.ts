import { Component, OnInit } from '@angular/core';
import { ProgramasSociales } from 'src/app/interfaces/programas-sociales';
import { ProgramasSocialesService } from 'src/app/services/programas-sociales.service';

@Component({
  selector: 'app-programas-sociales',
  templateUrl: './programas-sociales.component.html',
  styleUrls: ['./programas-sociales.component.css']
})
export class ProgramasSocialesComponent implements OnInit {
  listPS: ProgramasSociales[] = [];

  constructor(private _psService: ProgramasSocialesService) { }

  ngOnInit(): void {
    this.getPS();
  }

  getPS() {
    this._psService.getListPS().subscribe(data => {
      this.listPS = data;
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
    const blob = new Blob([bytes], { type: 'application/pdf' });
    return URL.createObjectURL(blob);
  }

}
