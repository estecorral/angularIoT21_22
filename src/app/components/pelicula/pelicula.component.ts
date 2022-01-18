import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import movies from '../../../assets/movies.json';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  id: string = '';
  titulo: string = '';
  peliculasData: any = movies;
  pelicula: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.route.queryParams.subscribe((params: any) => {
    this.id = params.id;
    this.titulo = params.title;
   });
   
  }

}
