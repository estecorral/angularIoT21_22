import { Component, OnInit } from '@angular/core';
import series from '../../../assets/series.json';
import peliculas from '../../../assets/movies.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public seriesData: any = series.slice(0, 5);
  public peliculasData: any = peliculas.slice(0, 5);
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.seriesData);
    console.log(this.peliculasData);
  }

  goToPelicula(id: string, title: string) {
    this.router.navigate(['/pelicula'], {queryParams: {'id' :id, 'title' : title}});
  }

  goToSerie(id: string, name: string) {
    this.router.navigate(['/serie'], {queryParams: {'id' :id, 'name' : name}});
  }

}
