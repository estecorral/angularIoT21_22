import { Component, OnInit } from '@angular/core';
import series from '../../../assets/series.json';
import peliculas from '../../../assets/movies.json';
import { Router } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { PeliculaComponent } from '../pelicula/pelicula.component';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public seriesData: any = series.slice(0, 5);
  public peliculasData: any = [];
  constructor(private router: Router, private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.getUpcoming().subscribe((data: any) => {
      console.log(data);
      this.peliculasData = data;
    });
  }

  goToPelicula(id: string, title: string) {
    this.router.navigate(['/pelicula'], {queryParams: {'id' :id, 'title' : title}});
  }

  goToSerie(id: string, name: string) {
    this.router.navigate(['/serie'], {queryParams: {'id' :id, 'name' : name}});
  }

}
