import { Component, OnInit } from '@angular/core';
import series from '../../../assets/series.json';
import peliculas from '../../../assets/movies.json';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public seriesData: any = series.slice(0, 5);
  public peliculasData: any = peliculas.slice(0, 5);
  constructor() { }

  ngOnInit(): void {
    console.log(this.seriesData);
    console.log(this.peliculasData);
  }

}
