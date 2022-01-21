import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  apiURL = 'https://api.themoviedb.org/3/movie/';
  language = '&language=es-ES';
  constructor(private httpClient: HttpClient) {}

  getUpcoming() {
    const url = `${this.apiURL}upcoming?${environment.apiKey}${this.language}`;
    return this.httpClient.get(url).pipe((map((data: any) => {
      return data.results.slice(0, 5);
    })));
  }

  getNowPlaying(page?: number) {
    if(page) {
      const url = `${this.apiURL}now_playing?${environment.apiKey}${this.language}&page=${page}`;
      return this.httpClient.get(url);
    } else {
      const url = `${this.apiURL}now_playing?${environment.apiKey}${this.language}`;
      return this.httpClient.get(url).pipe(
        map((data: any) => {
          return data.results;
        })
      ); 
    }
  }

  getPeliculaData(id: string) {
    const url = `${this.apiURL}${id}?${environment.apiKey}${this.language}`;
    return this.httpClient.get(url);
  }
}
