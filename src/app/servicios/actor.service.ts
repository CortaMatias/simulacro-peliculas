import { Injectable } from '@angular/core';
import { Actor } from '../clases/actor';
import { Firestore, addDoc, collection, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private firestore : Firestore) { }

  public async guardarActorBD(actor: Actor)  {
    try {
      const docRef = await addDoc(collection(this.firestore, 'actores'), {
        nombre: actor.nombre,
        apellido: actor.apellido,
        edad: actor.edad,
        pais: actor.pais,
      });
      console.log('Document written with ID: ', docRef.id);
      return true;
    } catch (e) {
      console.error('Error adding document: ', e);
      return false;
    }
  }

  public async traerActoresBd() {
    const actoresCollection = collection(this.firestore, 'actores');
    const query = await getDocs(actoresCollection);
    const actores = query.docs.map((doc) => {
      return {
        id: doc.id, 
        ...doc.data(), 
      };
    });
    return actores;
  }
}
