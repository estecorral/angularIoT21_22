import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private httpClient: HttpClient) { }

  getPaises() {
    return this.httpClient.get('https://restcountries.com/v3.1/region/europe').pipe(map((data: any)=> {
      return data.map((pais: any) => ({pais: pais.name.common, capital: pais.capital[0]}));
    }));
  }
}
