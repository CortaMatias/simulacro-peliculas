import { Component } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent {

  selectedPelicula!: Pelicula;

  onPeliculaSelected(pelicula: Pelicula) {
    this.selectedPelicula = pelicula;
  }

}
