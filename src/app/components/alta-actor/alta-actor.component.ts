import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { ActorService } from 'src/app/servicios/actor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.scss'],
})
export class AltaActorComponent implements OnInit {
  constructor(private actorService: ActorService) {}

  actorForm = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.nullValidator,
    ]),
    apellido: new FormControl('', [
      Validators.required,
      Validators.nullValidator,
    ]),
    edad: new FormControl('', [
      Validators.required,
      Validators.nullValidator,
      Validators.min(0),
      Validators.max(99),
    ]),
    pais: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    Swal.fire({
      icon: 'success',
      title: 'Alta Actores',
      text: 'Cargando Paises . . .',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  async onSubmit() {
    if (this.actorForm.valid) {
      const actor: Actor = new Actor(
        this.actorForm.controls['nombre'].value!,
        this.actorForm.controls['apellido'].value!,
        +this.actorForm.controls['edad'].value!,
        this.actorForm.controls['pais'].value!
      );
      const x = await this.actorService.guardarActorBD(actor);
      if (x) {
        Swal.fire({
          icon: 'success',
          title: 'Alta de actor exitosa',
          text: 'actor agregado',
          showConfirmButton: false,
          timer: 1500,
          allowOutsideClick: false
        });
        this.actorForm.reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrio un error al agregar el actor a la base de datos',
          timer: 4000,
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error en los datos!!',
        timer: 2500,
      });
    }
    console.log(this.actorForm.value);
  }

  actualizarPais(pais: string) {
    this.actorForm.patchValue({ pais });
  }
}
