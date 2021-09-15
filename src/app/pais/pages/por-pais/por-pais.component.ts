import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {
  termino: string = ''
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugerencias: Country[] = [];

  constructor(private paisServices: PaisService) { }

  ngOnInit(): void { }
  buscar(termino: string) {
    this.paisesSugerencias = [];
    this.hayError = false;
    this.termino = termino
    this.paisServices.buscarPais(this.termino).subscribe(paises => {
      console.log(paises);
      this.paises = paises;
      this.paisesSugerencias = [];

    }, (err) => {
      this.paisesSugerencias = [];
      this.hayError = true;
      console.log(err);
      this.paises = [];
    })

  }

  sugerencias(termino: string) {
    console.log(termino);
    this.paisServices.buscarPais(termino).subscribe(paises => {
      console.log(paises);
      this.paisesSugerencias = paises.splice(0, 3);
    }, (err) => {
      this.hayError = true;
      console.log(err);
      this.paisesSugerencias = [];
    })
    
  }

}
