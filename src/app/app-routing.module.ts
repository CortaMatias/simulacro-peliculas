import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AltaPeliculaComponent } from './components/alta-pelicula/alta-pelicula.component';
import { ListadoPeliculasComponent } from './components/listado-peliculas/listado-peliculas.component';
import { ListadoActoresComponent } from './components/listado-actores/listado-actores.component';
import { AltaActorComponent } from './components/alta-actor/alta-actor.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ActorPeliculaComponent } from './components/actor-pelicula/actor-pelicula.component';

const routes: Routes = [
{ path : "home",
component : HomeComponent,
children: [
  {path: "peliculas/alta" , component: AltaPeliculaComponent },
  {path: "peliculas/listado" , component: ListadoPeliculasComponent },
  {path: "actor/listado" , component: ListadoActoresComponent },
  {path: "actor/alta" , component: AltaActorComponent },
  {path: "busqueda" , component: BusquedaComponent },
  {path: "actor-pelicula" , component: ActorPeliculaComponent },
]
},
{ path: "bienvenido", component : BienvenidoComponent},
{ path: "", redirectTo: "bienvenido", pathMatch : "full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
