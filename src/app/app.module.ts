import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { AltaPeliculaComponent } from './components/alta-pelicula/alta-pelicula.component';
import { AltaActorComponent } from './components/alta-actor/alta-actor.component';
import { ListadoPeliculasComponent } from './components/listado-peliculas/listado-peliculas.component';
import { ListadoActoresComponent } from './components/listado-actores/listado-actores.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { FormsModule } from '@angular/forms';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { ActorPeliculaComponent } from './components/actor-pelicula/actor-pelicula.component';
import { DetallePaisComponent } from './components/detalle-pais/detalle-pais.component';
import { DetalleActorComponent } from './components/detalle-actor/detalle-actor.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    AltaPeliculaComponent,
    AltaActorComponent,
    ListadoPeliculasComponent,
    ListadoActoresComponent,
    HomeComponent,
    NavbarComponent,
    TablaPaisesComponent,
    DetallePeliculaComponent,
    ActorPeliculaComponent,
    DetallePaisComponent,
    DetalleActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
