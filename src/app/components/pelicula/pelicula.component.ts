import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  id: string = '';
  titulo: string = '';
  pelicula: any;
  constructor(private route: ActivatedRoute, private peliculasService: PeliculasService) { }

  ngOnInit(): void {
   this.route.queryParams.subscribe((params: any) => {
    this.id = params.id;
    this.titulo = params.title;
    this.peliculasService.getPeliculaData(this.id).subscribe((data: any) => {
        this.pelicula = data;
        console.log(this.pelicula);
    });
   });
   
  }

}
