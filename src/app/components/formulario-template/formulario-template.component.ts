import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisesService } from 'src/app/services/paises.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css']
})
export class FormularioTemplateComponent implements OnInit {
  usuario = {
    nombre: '',
    apellidos: '',
    email: ''
  }
  datosRegistro = {
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    ciudad: '',
    pais: '',
    nacimiento: '',
    genero: ''
  };
  ciudades = ['León', 'Ponferrada', 'Astorga', 'Bembibre', 'Toreno'];
  paises: any[] = [];
  minDate: Date;
  maxDate: Date;
  constructor(private paisesService: PaisesService, private snakBar: MatSnackBar, private router: Router) { 
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100, 0, 1);
    this.maxDate = new Date(currentYear + 0, 0, 0);
    this.getData();
  }

  ngOnInit(): void {
    this.paisesService.getPaises().subscribe((paises: any) => {
      this.paises = paises;
      console.log(this.paises);
    })
  }

  getData() {
    if(this.router.getCurrentNavigation()?.extras.state) {
      const data = this.router.getCurrentNavigation()?.extras.state; 
      this.datosRegistro = data?.['data'];
      console.log(this.datosRegistro);
    }
  }

  sendData(form: NgForm) {
    if(form.invalid) {
      console.log('El formulario es invalido');
      this.snakBar.open('Datos no válidos, compruebe los campos en rojo', 'Cerrar', {
        duration: 5000
      })
      return;
    }
    this.router.navigate(['confirmar'], { state: {registro: form.value}});
    console.log(form);
    console.log(form.value);

  }
}
