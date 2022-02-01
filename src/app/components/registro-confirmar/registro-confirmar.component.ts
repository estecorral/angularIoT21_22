import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-confirmar',
  templateUrl: './registro-confirmar.component.html',
  styleUrls: ['./registro-confirmar.component.css'],
})
export class RegistroConfirmarComponent implements OnInit {
  data: any;
  constructor(private router: Router) {
    this.data = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.data.registro);
  }

  ngOnInit(): void {
  
  }

  getData() {
    
  }
}
