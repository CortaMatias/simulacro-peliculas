import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaisesService {


  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any[]> {
    return this.http.get<any[]>('https://restcountries.com/v2/all');
  }

  getPais(nombre: string): Observable<any> {
    return this.http.get<any>('https://restcountries.com/v2/name/' + nombre);
  }
  
  
}
