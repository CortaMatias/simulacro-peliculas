import { Component } from '@angular/core';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.scss']
})
export class ActorPeliculaComponent {


  selectedActor: any = null;

onActorSeleccionado(actor: any) {
  this.selectedActor = actor;
}
}
