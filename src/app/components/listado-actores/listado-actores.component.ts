import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { ActorService } from 'src/app/servicios/actor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-actores',
  templateUrl: './listado-actores.component.html',
  styleUrls: ['./listado-actores.component.scss']
})
export class ListadoActoresComponent implements OnInit {

  actores : any[] = [];
  @Output() actorSeleccionado = new EventEmitter<string>();
  selectedActor : any = null;

  seleccionarActor(actor : any){
    this.selectedActor = actor;
    this.actorSeleccionado.emit(actor);
  }
  
  constructor(private actoresService : ActorService){}

  ngOnInit() {
    // Inicia la carga de los actores
    const actoresPromise = this.actoresService.traerActoresBd();
  
    // Muestra la alerta
    Swal.fire({
      icon: 'success',
      title: 'Actores',
      text: 'Cargando actores...',
      showConfirmButton: false,
      timer: 2500,
      allowOutsideClick: false
    }).then(async () => {
        try {
          const actoresData = await actoresPromise;
          console.log('Datos de actores:', actoresData);
          this.actores = actoresData;
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
