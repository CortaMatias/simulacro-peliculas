import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  getDocs,
} from '@angular/fire/firestore';
import { query, where } from '@angular/fire/firestore';
import { Pelicula } from '../clases/pelicula';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  constructor(private firestore: Firestore) {}

  public async guardarPeliBD(pelicula: Pelicula) {
    try {
      const docRef = await addDoc(collection(this.firestore, 'peliculas'), {
        nombre: pelicula.nombre,
        tipo: pelicula.tipo,
        fechaEstreno: pelicula.fechaEstreno,
        cantidadPublico: pelicula.cantidadPublico,
        fotoPelicula: pelicula.fotoPelicula,
        actor: pelicula.actor,
      });
      console.log('Document written with ID: ', docRef.id);
      return true;
    } catch (e) {
      console.error('Error adding document: ', e);
      return false;
    }
  }

  public async traerPeliculasBd() {
    const peliculasCollection = collection(this.firestore, 'peliculas');
    const query = await getDocs(peliculasCollection);
    const peliculas = query.docs.map((doc) => doc.data());
    return peliculas;
  }

  public async buscarPeliculaPorActor(nombreActor: string) {
    const peliculasCollection = collection(this.firestore, 'peliculas');
    const q = query(peliculasCollection, where('actor', '==', nombreActor));
    const querySnapshot = await getDocs(q);
    const peliculas = querySnapshot.docs.map((doc) => doc.data());
    console.log(peliculas);
    return peliculas;
  }
}
