import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from 'src/app/services/paises.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {
  formularioRegistro: FormGroup;
  paises: any;
  datosRegistro = {
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    password2: '',
    telefono: '',
    pais: '',
    ciudad: '',
    direccion: {
      calle: '',
      numero: '',
    },
    nacimiento: '',
    genero: ''
  }

  constructor(private formBuilder: FormBuilder, private paisesService: PaisesService,
    private snackBar: MatSnackBar, private router: Router) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      const data = this.router.getCurrentNavigation()?.extras.state;
      this.datosRegistro = data?.['data'];
      console.log(this.datosRegistro);
    }
    this.paisesService.getPaises().subscribe((data: any) => {
      this.paises = data;
    });
     this.formularioRegistro = this.formBuilder.group({
       nombre: [this.datosRegistro.nombre, [Validators.required, Validators.minLength(3)]],
       apellidos: [this.datosRegistro.apellidos, [Validators.required, Validators.minLength(5)]],
       email: [
         this.datosRegistro.email,
         [
           Validators.required,
           Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
         ],
       ],
       password: [this.datosRegistro.password, [Validators.required, Validators.minLength(5)]],
       password2: [this.datosRegistro.password2, [Validators.required, Validators.minLength(5)]],
       
       telefono: [this.datosRegistro.telefono, [Validators.required, Validators.minLength(9)]],
       pais: [this.datosRegistro.pais, Validators.required],
       ciudad: [this.datosRegistro.ciudad, Validators.required],
       direccion: this.formBuilder.group({
         calle: [this.datosRegistro.direccion.calle, [Validators.required]],
         numero: [this.datosRegistro.direccion.numero, [Validators.required]]
       }),
       nacimiento: [this.datosRegistro.nacimiento, [Validators.required]],
       genero: [this.datosRegistro.genero, Validators.required],
     });
  }

  ngOnInit(): void {

  }

  checkPassword(control: AbstractControl) {
    if(control.get('password')?.value === control.get('password2')?.value){
      return { equals: true };
    } else {
      return { equals: false };
    }
  }
  sendForm() {
    if(this.formularioRegistro.status === 'INVALID') {
      return;
    } else if (this.formularioRegistro.value.password !== this.formularioRegistro.value.password2){
      this.snackBar.open('Las contraseñas no coinciden', 'Cerrar', {
        duration: 5000
      });
      return
    }
    this.datosRegistro = this.formularioRegistro.value;
    this.router.navigate(['confirmar'], {state: {registro: this.datosRegistro}});
  }

  borrarDatos() {
   this.formularioRegistro.reset();
   /*this.formularioRegistro.setValue({
     nombre: '',
     apellidos: '',
     email: '',
     password: '',
     password2: '',
     telefono: '',
     pais: '',
     ciudad: '',
     direccion: {
       calle: '',
       numero: '',
     },
     nacimiento: '',
     genero: '',
   }); */
    console.log(this.formularioRegistro);
    // this.formularioRegistro;
  }
}
