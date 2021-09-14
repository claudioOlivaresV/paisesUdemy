import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  deboncer: Subject<string> = new Subject();
  @Input() placeholder: string = '';


  termino: string = ''
  constructor() { }

  ngOnInit(): void {
    this.deboncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(valor => {
        console.log('debonce :' + valor);
        this.onDebounce.emit(valor)

      })
  }
  buscar() {
    this.onEnter.emit(this.termino)
  }
  teclaPresionada() {
    this.deboncer.next(this.termino);
  }

}
