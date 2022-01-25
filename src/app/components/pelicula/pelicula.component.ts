import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
})
export class PeliculaComponent implements OnInit {
  id: string = '';
  titulo: string = '';
  pelicula: any;
  backUrl: string = '';
  credits: any;
  constructor(
    private route: ActivatedRoute,
    private peliculasService: PeliculasService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.id = params.id;
      this.titulo = params.title;
      this.peliculasService.getPeliculaData(this.id).subscribe((data: any) => {
        this.pelicula = data;
        this.backUrl =
          'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces' +
          data.backdrop_path;
        console.log(this.pelicula);
      });
      this.peliculasService.getCredits(this.id).subscribe((data: any) => {
        this.credits = data.cast;
        console.log(this.credits);
      });
    });
  }
  puntuacionUsuario(e: any) {
    this.snackBar.open('El usuario ha puntuado con: ' + e, 'Cerrar', {
      duration: 3000,
    });
  }
}
