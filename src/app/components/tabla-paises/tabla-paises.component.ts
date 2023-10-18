import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActorService } from 'src/app/servicios/actor.service';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {
  paises : any[] = [];
  searchText : string = '';
  selectPais : any;
  filteredCountries : any;
  @Output() paisSeleccionado = new EventEmitter<string>();

  constructor(private paisesService : PaisesService){  }

  seleccionarPais(pais : any) {
    this.selectPais = pais;
    this.paisSeleccionado.emit(pais.name);
  }

  ngOnInit(): void {
    this.paisesService.getAllCountries().subscribe( (data :  any) => {
      this.paises = data;
      this.filteredCountries = data;
    });
    console.log(this.paises)
  }

  filterCountries() {
    if (!this.searchText) {
      this.filteredCountries = this.paises;
    } else {
      this.filteredCountries = this.paises.filter((country) =>
        country.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

}
