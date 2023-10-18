import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.scss']
})
export class ListadoPeliculasComponent implements OnInit {
  peliculas : any[] = []
  constructor(private peliculasService : PeliculasService){}


  @Output() peliculaSelected = new EventEmitter<Pelicula>();

selectPelicula(pelicula: Pelicula) {
  this.peliculaSelected.emit(pelicula);
}

  
  ngOnInit(): void {
      // Inicia la carga de los actores
    const peliculasPromise = this.peliculasService.traerPeliculasBd();
  
    // Muestra la alerta
    Swal.fire({
      icon: 'success',
      title: 'Peliculas',
      text: 'Cargando Peliculas . . .',
      showConfirmButton: false,
      timer: 2500,
      allowOutsideClick: false
    }).then(async () => {
        try {
          const peliculasData = await peliculasPromise;
          console.log('Datos de actores:', peliculasData);
          this.peliculas = peliculasData;
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            timer: 4000,
          });
        }
      });
  }
}
