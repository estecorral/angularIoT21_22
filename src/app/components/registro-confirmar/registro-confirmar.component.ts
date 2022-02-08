import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registro-confirmar',
  templateUrl: './registro-confirmar.component.html',
  styleUrls: ['./registro-confirmar.component.css'],
})
export class RegistroConfirmarComponent implements OnInit {
  data: any;
  constructor(private router: Router, private snackBar: MatSnackBar) {
    this.data = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.data);
  }

  ngOnInit(): void {
    
  }

  sendData() {
    this.snackBar.open('Datos registrados correctamente', 'Close', {
      duration: 3000,
    });
    this.router.navigate(['']);
  }
  editar() {
    this.router.navigate(['reactivo'], {state: {'data': this.data.registro}});
  }
}
