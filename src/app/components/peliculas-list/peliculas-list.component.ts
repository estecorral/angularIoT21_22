import { Component, OnInit } from '@angular/core';
import movies from '../../../assets/movies.json';
import { Router } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas-list',
  templateUrl: './peliculas-list.component.html',
  styleUrls: ['./peliculas-list.component.css']
})
export class PeliculasListComponent implements OnInit {
  peliculasData: any = [];
  page = 1;
  totalPages = 0;
  numPelis = 0;
  constructor(private router: Router, private pelicuasService: PeliculasService) { }

  ngOnInit(): void {
    this.pelicuasService.getNowPlaying().subscribe((data =>{
      console.log(data);
      this.peliculasData = data;
    }));
  }

  goToPelicula(id: string, title: string) {
    this.router.navigate(['/pelicula'], {queryParams: {'id': id, 'title': title}});
  }

  cargarMasPelis() {
    this.page += 1;
    this.numPelis = this.peliculasData.length;
    this.pelicuasService.getNowPlaying(this.page).subscribe((data: any) => {
      this.peliculasData = this.peliculasData.concat(data.results);
      this.totalPages = data.total_pages;
    });
  }
}
