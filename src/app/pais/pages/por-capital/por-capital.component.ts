import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {
  termino: string = ''
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisServices: PaisService) { }

  ngOnInit(): void { }
  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino
    this.paisServices.buscarCapital(this.termino).subscribe(paises => {
      console.log(paises);
      this.paises = paises;
    }, (err) => {
      this.hayError = true;
      console.log(err);
      this.paises = [];
    })

  }
  sugerencias(termino: string) {
  }

}
