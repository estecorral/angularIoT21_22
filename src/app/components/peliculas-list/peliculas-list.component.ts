import { Component, OnInit } from '@angular/core';
import movies from '../../../assets/movies.json';
import { Router } from '@angular/router';
@Component({
  selector: 'app-peliculas-list',
  templateUrl: './peliculas-list.component.html',
  styleUrls: ['./peliculas-list.component.css']
})
export class PeliculasListComponent implements OnInit {
  peliculasData: any = movies; 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPelicula(id: string, title: string) {
    this.router.navigate(['/pelicula'], {queryParams: {'id': id, 'title': title}});
  }
}
