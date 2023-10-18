export class Pelicula {
    nombre: string;
    tipo: string;
    fechaEstreno: Date;
    cantidadPublico: number;
    fotoPelicula: string;
    actor: string;
  
    constructor(
      nombre: string,
      tipo: string,
      fechaEstreno: Date,
      cantidadPublico: number,
      fotoPelicula: string,
      actor:string
    ) {
      this.nombre = nombre;
      this.tipo = tipo;
      this.fechaEstreno = fechaEstreno;
      this.cantidadPublico = cantidadPublico;
      this.fotoPelicula = fotoPelicula;
      this.actor = actor;
    }
  }
  