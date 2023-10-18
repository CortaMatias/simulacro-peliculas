import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.scss'],
})
export class AltaPeliculaComponent implements OnInit {
  form!: FormGroup;
  imagenSeleccionada: any = null;
  imagenURL: string = '';
  actorSeleccionado: string = '';
  constructor(private peliculasService : PeliculasService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      fechaEstreno: new FormControl('', [Validators.required]),
      cantidadPublico: new FormControl('', [Validators.required]),
      fotoPelicula: new FormControl('', [Validators.required]),
      actor: new FormControl('', [Validators.required]),
    });
  }

  async onSubmit() {
    if (this.form.valid) {
      const pelicula: Pelicula = new Pelicula(
        this.form.controls['nombre'].value,
        this.form.controls['tipo'].value,
        this.form.controls['fechaEstreno'].value,
        this.form.controls['cantidadPublico'].value,
        this.imagenSeleccionada,
        this.form.controls['actor'].value
      );      
      console.log(pelicula);
      const x = await this.peliculasService.guardarPeliBD(pelicula);
      if(x){        
        this.form.reset();
        this.imagenSeleccionada = null;
        this.imagenURL = "";
        Swal.fire({
          icon: 'success',
          title: 'Alta de pelicula exitosa',
          text: 'pelicula agregada',
          showConfirmButton: false,
          timer: 1500,
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Error al agregar la pelicula',
          text: "Ocurrio un error al agregar la pelicula en la base de datos",
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
  }

  actualizarActor(actor: any) {
    this.actorSeleccionado = actor;
    const actorNombre = actor.nombre + ' ' + actor.apellido;
    this.form.controls['actor'].setValue(actorNombre);
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imagenSeleccionada = e.target.result;

        this.imagenURL = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  resetImageInput() {
    const inputElement = document.getElementById(
      'fotoPelicula'
    ) as HTMLInputElement;
    inputElement.value = '';
  }
}
