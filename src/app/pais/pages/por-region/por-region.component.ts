import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regiones = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  regionActiva: string = '';
  hayError: boolean = false;
  loading: boolean = false;
  paises: Country[] = [];

  constructor(private paisServices: PaisService) { }

  ngOnInit(): void {
  }
  activarRegion( region :string ) {
    if( region === this.regionActiva) { return }
    this.paises = [];
    this.loading = true;
    console.log(region);    
    this.regionActiva = region;
    this.buscar();
  }
  buscar() {
    this.hayError = false;
    this.paisServices.buscarRegion(this.regionActiva).subscribe(paises => {
      console.log(paises);
      this.paises = paises;
      this.loading = false;
    }, (err) => {

      this.hayError = true;
      console.log(err);
      this.paises = [];
      this.loading = false;

    })

  }

}
