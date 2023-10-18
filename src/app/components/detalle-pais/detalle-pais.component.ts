import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.scss']
})
export class DetallePaisComponent implements OnInit, OnChanges {
  pelicula : any;
  @Input() actor: any;
  pais : any;

  constructor(private paisesService : PaisesService){}

  ngOnInit(): void {
    this.obtenerPais();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["actor"] && !changes["actor"].firstChange) {
      this.obtenerPais();
    }
  }

  obtenerPais(){
    this.paisesService.getPais(this.actor.pais).pipe(
      catchError(error => {
        // maneja el error aquí
        console.error('Ocurrió un error al obtener el país:', error);
        return throwError(error);
      })
    ).subscribe(pais => {
      console.log('País obtenido:', pais);
      this.pais = pais[0]// maneja la respuesta aquí
    });
  }
}
