import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-puntuacion',
  templateUrl: './puntuacion.component.html',
  styleUrls: ['./puntuacion.component.css']
})
export class PuntuacionComponent implements OnInit {
  @Input() puntuacion: number = 0;
  @Output() newPuntuacion = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  sendPuntuacion(puntos: number) {
    this.newPuntuacion.emit(puntos);
  }

}
