import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnChanges {

  constructor(private peliculasService : PeliculasService){}

  @Input() actor: any;

  @Input() pelicula!: Pelicula;  
  peliculas : any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["actor"] && changes["actor"].currentValue) {
      this.buscarPeliculas(this.actor.nombre + " " + this.actor.apellido);
    }
    if (changes["pelicula"] && changes["pelicula"].currentValue) {
      this.peliculas = []; // Vaciamos el array
      this.peliculas.push(this.pelicula); // Agregamos la nueva película
    }
  }

  buscarPeliculas(nombreActor: string): void {
    this.peliculasService.buscarPeliculaPorActor(nombreActor).then(peliculas => {
      console.log(peliculas);
      this.peliculas = peliculas;
    }).catch(error => {
      console.error('Ocurrió un error al buscar las películas:', error);
    });
  }
}
